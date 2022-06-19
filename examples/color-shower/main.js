import { Elm } from "./src/Main.elm";
import sendInputsToElmApp from "../../playground-exploration/src/input";

const app = Elm.Main.init({
  node: document.querySelector("#app div"),
  flags: { devicePixelRatio: window.devicePixelRatio },
});

sendInputsToElmApp(app);
