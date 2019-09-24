//const msg = prompt("What is your name?");
//If answer is blank, ask again:
function greeter(question = "What is your quest?") {
  let answer = prompt(question);
  if (answer === ""){
  return greeter();
  }
  return answer;
}

//document.querySelector('h1').textContent("Nope");

document.querySelector("h1").textContent = greeter();

