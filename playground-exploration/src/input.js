const sendInputsToElmApp = (app) => {
  /* 
    initial computer 
  */
  var computer = {
    test: "use me for testing",
    dt: 0,
    clock: 0,
    keyboard: {
      // states
      pressedKeys: [],
      control: false,
      alt: false,
      shift: false,
      // actions
      downs: [],
    },
    pointer: {
      // states
      x: 10,
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
  };

  /* 
    helper functions for getting information out of events 
  */
  const isControlKey = (e) =>
    ["ControlLeft", "ControlRight", "MetaLeft", "MetaRight"].includes(e.code);
  const isAltKey = (e) => ["AltLeft", "AltRight"].includes(e.code);
  const isShiftKey = (e) => ["ShiftLeft", "ShiftRight"].includes(e.code);

  const isLeftMouseButton = (e) => e.button == 0;
  const isRightMouseButton = (e) => e.button == 2;

  /* 
    the states should be reset when the browser tab looses focus 
  */
  function resetStates(computer) {
    computer.keyboard.pressedKeys = [];
    computer.keyboard.control = false;
    computer.keyboard.alt = false;
    computer.keyboard.shift = false;
    computer.pointer.isDown = false;
  }

  /* 
    the actions live only one tick. They must be reset for the next tick 
  */
  function resetActions(computer) {
    computer.keyboard.downs = [];
    computer.pointer.down = false;
    computer.pointer.move = false;
    computer.pointer.up = false;
    computer.pointer.rightDown = false;
    computer.pointer.rightUp = false;
    computer.wheel.deltaX = 0;
    computer.wheel.deltaY = 0;
  }

  /* 
    event listeners that update the computer 
  */
  window.addEventListener("keydown", (e) => {
    if (!e.repeat) {
      computer.keyboard.downs.push(e.code);
      computer.keyboard.pressedKeys.push(e.code);

      if (isControlKey(e)) {
        computer.keyboard.control = true;
      }

      if (isAltKey(e)) {
        computer.keyboard.alt = true;
      }

      if (isShiftKey(e)) {
        computer.keyboard.shift = true;
      }
    }
  });

  window.addEventListener("keyup", (e) => {
    computer.keyboard.pressedKeys = computer.keyboard.pressedKeys.filter(
      (code) => code != e.code
    );

    if (isControlKey(e)) {
      computer.keyboard.control = false;

      // the next line is to prevent buggy behavoiur on OS X
      computer.keyboard.pressedKeys = [];
    }

    if (isAltKey(e)) {
      computer.keyboard.alt = false;
    }

    if (isShiftKey(e)) {
      computer.keyboard.shift = false;
    }
  });

  window.addEventListener("pointerdown", (e) => {
    if (isLeftMouseButton(e)) {
      computer.pointer.down = true;
      computer.pointer.isDown = true;
    }
    if (isRightMouseButton(e)) {
      computer.pointer.rightDown = true;
    }
  });

  window.addEventListener("pointermove", (e) => {
    computer.pointer.move = true;
    computer.pointer.x = e.pageX;
    computer.pointer.y = e.pageY;
  });

  window.addEventListener("pointerup", (e) => {
    if (isLeftMouseButton(e)) {
      computer.pointer.up = true;
      computer.pointer.isDown = false;
    }
    if (isRightMouseButton(e)) {
      computer.pointer.rightUp = true;
    }
  });

  window.addEventListener("pointercancel", (e) => {
    if (isLeftMouseButton(e)) {
      computer.pointer.up = true;
      computer.pointer.isDown = false;
    }
    if (isRightMouseButton(e)) {
      computer.pointer.rightUp = true;
    }
  });

  window.addEventListener("wheel", (e) => {
    computer.wheel.deltaX = e.deltaX;
    computer.wheel.deltaY = e.deltaY;
  });

  window.addEventListener("blur", (e) => {
    resetStates(computer);
  });

  window.addEventListener("focus", (e) => {
    resetStates(computer);
  });

  window.addEventListener("visibilitychange", (e) => {
    resetStates(computer);
  });

  /* 
      And lastly, the animation frame loop where we
        - update time in computer,
        - send it to the elm app and
        - reset the actions to get the computer ready to the next tick
  */
  window.requestAnimationFrame(tick);
  function tick(timeStamp) {
    const dt = timeStamp - computer.clock;
    if (dt < 9) {
      // skip one frame if the screen has high refresh rate (120Hz on some ipads)
      window.requestAnimationFrame(tick);
    } else {
      // set clock and delta time
      computer.dt = dt;
      computer.clock = timeStamp;

      // log here for debugging purposes:
      console.log("yeeeey", computer);

      // Send the `computer` to elm app
      // TODO

      // reset actions
      resetActions(computer);

      // loop
      window.requestAnimationFrame(tick);
    }
  }
};

export default sendInputsToElmApp;
