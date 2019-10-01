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
document.querySelector("#root").innerHTML = `
  ${Header(state.home.heading)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;

// Object Destructuring
//const { name } = myObj;
//console.log(name);

//const {name, catchPhrase} = name;
//is same as
//const catchPhrase = myObj.catchPhrase;

