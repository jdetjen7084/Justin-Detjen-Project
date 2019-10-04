//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import Main from "./components/Main";
//import Nav from "./components/Nav";

import { Header, Nav, Main, Footer } from "./components";

//State used to render appropriate heading depending on the
//state of the app (what page is currently being displayed)
const state = {
  home: {
    heading: 'Home Page',
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  about: {
    heading: 'About Page',
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  contact: {
    heading: 'Contact Page',
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  gallery: {
    heading: 'Gallery Page',
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },
  blog: {
    heading: 'Blog Page',
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  }
}

// Grab #root div to assign the markup that is
// contained in the components
//st will represent a piece of state
function render(st = state.home) {
document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main()}
  ${Footer()}
`;
}

render();

const links = document.querySelectorAll("nav a, footer a");
//console.log(links);
//console.log(links[3]);

for (let i = 0; i < links.length; i += 1) {
  //const prop = links(i.textContent);
    links[i].addEventListener('click', function(event){
    event.preventDefault();
    //console.log(state[event.target.textContent.toLowerCase()]);
    render(state[event.target.textContent.toLowerCase()]);
  })
}
//todo: Add links array to each piece of state


// Object Destructuring
//const { name } = myObj;
//console.log(name);
//const {name, catchPhrase} = name;
//is same as
//const catchPhrase = myObj.catchPhrase;

