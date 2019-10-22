
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

// uppercase indicates it's a constructor function
import Navigo from "navigo";
import axios from "axios";
import { capitalize } from "lodash";

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

// Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
router
  .on(":page", params =>
  render(
    state[
    capitalize(params.page)]
  )
  )
  .on("/", () => render())
  .resolve();

  // axios
  // .get("https://jsonplaceholder.typicode.com/posts")
  // .then(response => {
  //   state.Blog.main = response.data.map(post => console.log(post))
  // })
  // .catch(err => console.log(err));

  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      state.Blog.main = response.data.map(
        ({title, body}) => `
        <article>
          <h2>${title}</h2>
          <p>${body}</p>
        </article>
      `
      ).join("");
      if (capitalize(router.lastRouteResolved().params.page === "Blog")){
        render(state.Blog);
      }
      console.log(router.lastRouteResolved());
    })
    .catch(err => console.log(err));





  //Built SPA according to the Model View Updater using
  // uni-directional data flow (only goes one way)
  //State(Model) to Components(is the View) which renders functions
  //to the Updater (Navigo)
  //State is the Single Source of Truth
  //State is the motor, Components display, when something
  //is changed/clicked, the Updater sends an order to State
  //and the Components re-render
