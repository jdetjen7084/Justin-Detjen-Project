
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

// uppercase indicates it's a constructor function
import Navigo from "navigo";
import axios from "axios";

console.log(axios);

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
}

router
// Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
//todo: create 404 page and route bad routes..?
  .on(":page", params => render(state[`${params.page.slice(0, 1).toUpperCase()}${params.page.slice(1).toLowerCase()}`]))
  .on("/", render())
  .resolve();

  axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data))
  .catch(err => (console.log(err)));


  //Built SPA according to the Model View Updater using
  // uni-directional data flow (only goes one way)
  //State(Model) to Components(is the View) which renders functions
  //to the Updater (Navigo)
  //State is the Single Source of Truth
  //State is the motor, Components display, when something
  //is changed/clicked, the Updater sends an order to State
  //and the Components re-render
