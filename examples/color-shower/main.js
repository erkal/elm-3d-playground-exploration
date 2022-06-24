import { Elm } from "./src/Main.elm";
import {
  sendInputsToElmApp,
  initialInputs,
} from "../../playground-exploration/src/input";

const app = Elm.Main.init({
  node: document.querySelector("#app div"),
  flags: { inputs: initialInputs },
});

sendInputsToElmApp(app);
