import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";

// Grab #root div to assign the markup that is
// contained in the components
document.querySelector("#root").innerHTML = `
${Header()}
${Nav()}
${Main()}
${Footer()}
`;


