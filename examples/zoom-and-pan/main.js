import "../../playground-exploration/src/style.css";
import { Elm } from "./src/Main.elm";
import {
  sendInputsToElmApp,
  inputs,
} from "../../playground-exploration/src/input";
import { preventEvents } from "../../playground-exploration/src/preventEvents";

const app = Elm.Main.init({
  node: document.querySelector("#app div"),
  flags: { inputs: inputs },
});

preventEvents();
sendInputsToElmApp(app);
