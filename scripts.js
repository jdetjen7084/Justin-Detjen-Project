//const msg = prompt("What is your name?");

function greeter(question = "What is your quest?") {
  return prompt(question);
}
const answer = greeter();
console.log(answer);
//querySelector only selects first instance
//document.querySelector('h1').textContent("Nope");

//const h1TextContent = document.querySelector("h1").textContent;

document.querySelector("h1").textContent = greeter();

//console.log(h1TextContent);
