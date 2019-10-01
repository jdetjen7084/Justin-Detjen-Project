//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import Main from "./components/Main";
//import Nav from "./components/Nav";

import { Header, Nav, Main, Footer } from "./components";

// Grab #root div to assign the markup that is
// contained in the components
document.querySelector("#root").innerHTML = `
  ${Header()}
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

