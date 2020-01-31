function newQuestion() {
  document.querySelector("#answer").innerText = " ";
  fetch("https://opentdb.com/api.php?amount=10&category=27&type=boolean")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.querySelector("#question").innerText = data.results[0].question;
      correct = data.results[0].correct_answer;
      return correct;
    });
}

function answer() {
  const length = correct.length;

  if (length == 4) {
    document.querySelector("#answer").innerText = "The answer is ...TRUE!";
  } else {
    document.querySelector("#answer").innerText = "The answer is ...FALSE!";
  }
}
