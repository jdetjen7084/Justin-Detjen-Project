//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import Main from "./components/Main";
//import Nav from "./components/Nav";

import { Header, Nav, Main, Footer } from "./components";

//State used to render appropriate heading depending on the
//state of the app (what page is currently being displayed)
const state = {
  home: {
    heading: 'Home Page'
  },
  about: {
    heading: 'About Page'
  }
}

// Grab #root div to assign the markup that is
// contained in the components
//st will represent a piece of state
function render(st = state.home) {
document.querySelector("#root").innerHTML = `
  ${Header(st.heading)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;
}

render();
// Object Destructuring
//const { name } = myObj;
//console.log(name);
//const {name, catchPhrase} = name;
//is same as
//const catchPhrase = myObj.catchPhrase;
const aboutLink = document.querySelector('#about');

aboutLink.addEventListener('click', function(event){
  event.preventDefault();
  //console.log(state[event.target.textContent]);
  //const aboutElement = event.target;
  //const aboutText = event.target.textContent;
  render(state[event.target.textContent]);
});



