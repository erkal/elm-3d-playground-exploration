import { Elm } from "./src/Main.elm";

const root = document.querySelector("#app div");
const app = Elm.Main.init({
  node: root,
  flags: { devicePixelRatio: window.devicePixelRatio },
});

window.addEventListener("touchstart", (event) => {
  app.ports.touchStart.send(getTouchEvents(event.changedTouches));
});

window.addEventListener("touchmove", (event) => {
  app.ports.touchMove.send(getTouchEvents(event.changedTouches));
});

window.addEventListener("touchend", (event) => {
  app.ports.touchEnd.send(getTouchEvents(event.changedTouches));
});

window.addEventListener("touchcancel", (event) => {
  app.ports.touchCancel.send(getTouchEvents(event.changedTouches));
});

// touch
function getTouchEvents(touches) {
  const a = [];
  for (let i = 0; i < touches.length; i++) {
    a.push({
      identifier: touches[i].identifier,
      pageX: touches[i].pageX,
      pageY: touches[i].pageY,
    });
  }
  return a;
}
