// category: "Animals"
// type: "boolean"
// difficulty: "easy"
// question: "The Axolotl is an amphibian that can spend its whole life in a larval state."
// correct_answer: "True"
// incorrect_answers: ["False"]

fetch("https://opentdb.com/api.php?amount=10&category=27&type=boolean")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    document.querySelector("#question").innerText = data.results[0].question;
    document.querySelector("#incorrect").innerText =
      data.results[0].incorrect_answers;
    document.querySelector("#correct").innerText =
      data.results[0].correct_answer;
  });

function answer(ans) {
  if (ans == "True") {
    document.querySelector("#answer").innerText = "TRUE!";
  }
  document.querySelector("#answer").innerText = "FALSE!";
}
