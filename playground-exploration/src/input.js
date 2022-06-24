export { sendInputsToElmApp, initialInputs };

const initialInputs =
  /* 
    initial inputs 
  */
  {
    dt: 0,
    clock: 0,
    keyboard: {
      // states
      pressedKeys: [],
      control: false,
      alt: false,
      shift: false,
      left: false,
      right: false,
      up: false,
      down: false,
      // actions
      downs: [],
    },
    pointer: {
      // states
      x: 0,
      y: 0,
      isDown: false,
      // actions
      down: false,
      move: false,
      up: false,
      rightDown: false,
      rightUp: false,
    },
    wheel: {
      // actions
      deltaX: 0,
      deltaY: 0,
    },
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    devicePixelRatio: window.devicePixelRatio,
  };

const sendInputsToElmApp = (app) => {
  var inputs = initialInputs;

  /* 
    helper functions for getting information out of events 
  */
  const isControlKey = (e) =>
    ["ControlLeft", "ControlRight", "MetaLeft", "MetaRight"].includes(e.code);
  const isAltKey = (e) => ["AltLeft", "AltRight"].includes(e.code);
  const isShiftKey = (e) => ["ShiftLeft", "ShiftRight"].includes(e.code);
  const isArrowLeftKey = (e) => e == "ArrowLeft";
  const isArrowRightKey = (e) => e == "ArrowRight";
  const isArrowUpKey = (e) => e == "ArrowUp";
  const isArrowDownKey = (e) => e == "ArrowDown";

  const isLeftMouseButton = (e) => e.button == 0;
  const isRightMouseButton = (e) => e.button == 2;

  /* 
    the states should be reset when the browser tab looses focus 
  */
  function resetStates(inputs) {
    inputs.keyboard.pressedKeys = [];
    inputs.keyboard.control = false;
    inputs.keyboard.alt = false;
    inputs.keyboard.shift = false;
    inputs.keyboard.left = false;
    inputs.keyboard.right = false;
    inputs.keyboard.up = false;
    inputs.keyboard.down = false;
    inputs.pointer.isDown = false;
  }

  /* 
    the actions live only one tick. They must be reset for the next tick 
  */
  function resetActions(inputs) {
    inputs.keyboard.downs = [];
    inputs.pointer.down = false;
    inputs.pointer.move = false;
    inputs.pointer.up = false;
    inputs.pointer.rightDown = false;
    inputs.pointer.rightUp = false;
    inputs.wheel.deltaX = 0;
    inputs.wheel.deltaY = 0;
  }

  /* 
    listen to events and update the inputs
  */
  window.addEventListener("keydown", (e) => {
    if (!e.repeat) {
      inputs.keyboard.downs.push(e.code);
      inputs.keyboard.pressedKeys.push(e.code);

      if (isControlKey(e)) {
        inputs.keyboard.control = true;
      }

      if (isAltKey(e)) {
        inputs.keyboard.alt = true;
      }

      if (isShiftKey(e)) {
        inputs.keyboard.shift = true;
      }

      if (isArrowLeftKey(e)) {
        inputs.keyboard.left = true;
      }

      if (isArrowRightKey(e)) {
        inputs.keyboard.right = true;
      }

      if (isArrowUpKey(e)) {
        inputs.keyboard.up = true;
      }

      if (isArrowDownKey(e)) {
        inputs.keyboard.down = true;
      }
    }
  });

  window.addEventListener("keyup", (e) => {
    inputs.keyboard.pressedKeys = inputs.keyboard.pressedKeys.filter(
      (code) => code != e.code
    );

    if (isControlKey(e)) {
      inputs.keyboard.control = false;

      // the next line is to prevent buggy behavoiur on OS X
      inputs.keyboard.pressedKeys = [];
    }

    if (isAltKey(e)) {
      inputs.keyboard.alt = false;
    }

    if (isShiftKey(e)) {
      inputs.keyboard.shift = false;
    }

    if (isArrowLeftKey(e)) {
      inputs.keyboard.left = false;
    }

    if (isArrowRightKey(e)) {
      inputs.keyboard.right = false;
    }

    if (isArrowUpKey(e)) {
      inputs.keyboard.up = false;
    }

    if (isArrowDownKey(e)) {
      inputs.keyboard.down = false;
    }
  });

  window.addEventListener("pointerdown", (e) => {
    if (isLeftMouseButton(e)) {
      inputs.pointer.down = true;
      inputs.pointer.isDown = true;
    }
    if (isRightMouseButton(e)) {
      inputs.pointer.rightDown = true;
    }
  });

  window.addEventListener("pointermove", (e) => {
    inputs.pointer.move = true;
    inputs.pointer.x = e.pageX;
    inputs.pointer.y = e.pageY;
  });

  window.addEventListener("pointerup", (e) => {
    if (isLeftMouseButton(e)) {
      inputs.pointer.up = true;
      inputs.pointer.isDown = false;
    }
    if (isRightMouseButton(e)) {
      inputs.pointer.rightUp = true;
    }
  });

  window.addEventListener("pointercancel", (e) => {
    if (isLeftMouseButton(e)) {
      inputs.pointer.up = true;
      inputs.pointer.isDown = false;
    }
    if (isRightMouseButton(e)) {
      inputs.pointer.rightUp = true;
    }
  });

  window.addEventListener("wheel", (e) => {
    inputs.wheel.deltaX = e.deltaX;
    inputs.wheel.deltaY = e.deltaY;
  });

  window.addEventListener("blur", (e) => {
    resetStates(inputs);
  });

  window.addEventListener("focus", (e) => {
    resetStates(inputs);
  });

  window.addEventListener("visibilitychange", (e) => {
    resetStates(inputs);
  });

  window.addEventListener("resize", () => {
    inputs.screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  /* 
      And lastly, the animation frame loop where we
        - update time in inputs,
        - send it to the elm app and
        - reset the actions to get the inputs ready to the next tick
  */
  window.requestAnimationFrame(tick);
  function tick(timeStamp) {
    const newClock = timeStamp / 1000;

    const dt = newClock - inputs.clock;
    if (dt < 0.009) {
      // skip one frame if the screen has high refresh rate (120Hz on some ipads)
      window.requestAnimationFrame(tick);
    } else {
      // set clock and delta time
      inputs.dt = dt;
      inputs.clock = newClock;

      // log here for debugging purposes:
      // console.log("yeeeey", inputs);

      // Send the `inputs` to elm app
      app.ports.tick.send(inputs);

      // reset actions
      resetActions(inputs);

      // loop
      window.requestAnimationFrame(tick);
    }
  }
};
