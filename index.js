//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import Main from "./components/Main";
//import Nav from "./components/Nav";

import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
console.log(state);
// import { Home, About, Contact, Blog, Gallery, Links } from "./store";

// Grab #root div to assign the markup that is
// contained in the components
//st will represent a piece of state

function render(st = state.Home) {
document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;
}

render();

const links = document.querySelectorAll("nav a, footer a");

links.forEach(link => link.addEventListener('click', event =>{
  event.preventDefault();
  //console.log(state[event.target.textContent.toLowerCase()]);
  render(state[event.target.textContent]);
}));

// for (let i = 0; i < links.length; i += 1) {
//   //const prop = links(i.textContent);
//     links[i].addEventListener('click', function(event){
//     event.preventDefault();
//     //console.log(state[event.target.textContent.toLowerCase()]);
//     render(state[event.target.textContent]);
//   })
// }


// Object Destructuring
//const { name } = myObj;
//console.log(name);
//const {name, catchPhrase} = name;
//is same as
//const catchPhrase = myObj.catchPhrase;

