//const msg = prompt("What is your name?");
//If answer is blank, ask again:
function greeter(question = "What is your quest?") {
  let answer = prompt(question);
  if (answer === ""){
    greeter();
  }
  return answer;
}
//TODO: Resolve issue where h1 is not updated if user gives blank answer
//const answer = greeter();
//console.log(answer);
//querySelector only selects first instance
//document.querySelector('h1').textContent("Nope");

//const h1TextContent = document.querySelector("h1").textContent;

document.querySelector("h1").textContent = greeter();

