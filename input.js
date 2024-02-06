export { sendInputsToElmApp, inputs };

// prevent browser's default behavior for undo/redo
document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z")) {
    e.preventDefault();
  }
});

const preventElmInputs = (eventType) => {
  document.addEventListener(
    eventType,
    function (e) {
      let elements = document.querySelectorAll(".prevent-elm-inputs");
      if (
        e.target &&
        Array.from(elements).some((element) => element.contains(e.target))
      ) {
        e.stopPropagation();
      }
    },
    true
  );
};

preventElmInputs("pointerdown");
preventElmInputs("mousedown");
preventElmInputs("wheel");
preventElmInputs("keydown");

const inputs =
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
    sensoState: {
      center: { x: 0, y: 0, f: 0 },
      right: { x: 0, y: 0, f: 0 },
      up: { x: 0, y: 0, f: 0 },
      left: { x: 0, y: 0, f: 0 },
      down: { x: 0, y: 0, f: 0 },
    },
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    devicePixelRatio: window.devicePixelRatio,
  };

const sendInputsToElmApp = (app) => {
  /* 
    helper functions for getting information out of events 
  */
  const isControlKey = (e) =>
    ["ControlLeft", "ControlRight", "MetaLeft", "MetaRight"].includes(e.code);
  const isAltKey = (e) => ["AltLeft", "AltRight"].includes(e.code);
  const isShiftKey = (e) => ["ShiftLeft", "ShiftRight"].includes(e.code);
  const isArrowLeftKey = (e) => e.code == "ArrowLeft";
  const isArrowRightKey = (e) => e.code == "ArrowRight";
  const isArrowUpKey = (e) => e.code == "ArrowUp";
  const isArrowDownKey = (e) => e.code == "ArrowDown";

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
    listen to Senso signals
  */
  var stateForSensoGame = 0;
  PlayEGI.onSignal((signal) => {
    switch (signal.type) {
      case "Hello":
        // Play framework is greeting and sending game settings. This signal will be sent multiple times until we respond with ready.
        console.log(
          "Got a Hello from Play and some settings:",
          signal.settings,
          signal.memory
        );
        // We initialize the game's state to the provided memory, which our game may have returned with on its previous run.
        stateForSensoGame =
          typeof signal.memory === "number" ? signal.memory : stateForSensoGame;
        // Once we are ready and loaded we need to inform Play with `PlayEGI.ready()`
        // Let's simulate a loading time of 500ms and then inform Play that we are ready:
        setTimeout(PlayEGI.ready, 500);
        break;

      case "Suspend":
        // A game can be suspended/paused by Play. Game should be in suspended state until a "Resume" signal is received.
        console.log("Got Suspend from Play. Game should be paused.");
        break;

      case "Resume":
        //  When our game starts it should be in a suspended (paused) state. Only once we get the resume we can start playing.
        console.log("Got Resume from Play. Let us resume playing.");
        break;

      case "Ping":
        // This tests liveliness of the game and should be responded with a pong.
        PlayEGI.pong();
        break;

      case "Release":
        console.log("A release was detected! Direction: ", signal.direction);
        break;

      case "SensoState":
        inputs.sensoState = signal.state;
        console.log("Got Hardware signal from Senso: ", inputs.sensoState);
        break;

      default:
        // console.log(signal.type);
        break;
    }
  });

  /* 
    listen to events and update the inputs
  */
  window.addEventListener("keydown", (e) => {
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
  });

  window.addEventListener("keyup", (e) => {
    console.log("keyup", e.code);
    inputs.keyboard.pressedKeys = inputs.keyboard.pressedKeys.filter(
      (code) => code != e.code
    );

    if (isControlKey(e)) {
      inputs.keyboard.control = false;

      // the next line is to prevent buggy behavior on OS X
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
    inputs.pointer.x = -0.5 * inputs.screen.width + e.pageX;
    inputs.pointer.y = 0.5 * inputs.screen.height - e.pageY;

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
    inputs.pointer.x = -0.5 * inputs.screen.width + e.pageX;
    inputs.pointer.y = 0.5 * inputs.screen.height - e.pageY;
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
      app.ports?.tick?.send?.(inputs);

      // reset actions
      resetActions(inputs);

      // loop
      window.requestAnimationFrame(tick);
    }
  }
};
