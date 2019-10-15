
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
//uppercase indicates it's a constructor function
import Navigo from "navigo";
const router = new Navigo(location.origin);

// Grab #root div to assign the markup that is
// contained in the components
//st will represent a piece of state

function render(st = state.Home) {
document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav()}
  ${Main(st)}
  ${Footer()}
`;

//because data-navigo was used in nav page, this is all that's needed for the following block
router.updatePageLinks();

router
// Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
//todo: create 404 page and route bad routes..?
  .on(":page", params => render(state[`${params.page.slice(0, 1).toUpperCase()}${params.page.slice(1).toLowerCase()}`]))
  .on("/", render())
  .resolve();