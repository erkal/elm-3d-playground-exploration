import { Elm } from "./src/Main.elm";

const app = Elm.Main.init({
  node: document.getElementById("elm-node"),
});

window.addEventListener("touchstart", (event) => {
  event.preventDefault();
  app.ports.touchStart.send(getTouchEvents(event.changedTouches));
});

window.addEventListener("touchmove", (event) => {
  event.preventDefault();
  app.ports.touchMove.send(getTouchEvents(event.changedTouches));
});

window.addEventListener("touchend", (event) => {
  event.preventDefault();
  app.ports.touchEnd.send(getTouchEvents(event.changedTouches));
});

window.addEventListener("touchcancel", (event) => {
  event.preventDefault();
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
