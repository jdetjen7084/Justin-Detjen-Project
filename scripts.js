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
//innerHTML will enter HTML to doc, textContent will add content but won't insert into the HTML seamlessly
//document.querySelector("#root").innerHTML = greeter();
//Below is template literal
document.querySelector("#root").innerHTML = `<p>Your quest is ${greeter}</p>`
