function newQuestion() {
  fetch("https://opentdb.com/api.php?amount=10&category=27&type=boolean")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      document.querySelector("#question").innerText = data.results[0].question;
      const incorrect = (document.querySelector("#incorrect").innerText =
        data.results[0].incorrect_answers);
      const correct = (document.querySelector("#correct").innerText =
        data.results[0].correct_answer);
      return correct, incorrect;
    });
}

function answer(correct) {
  document.querySelector("#answer").innerText = correct;

  if (correct == "True") {
    document.querySelector("#answer").innerText = "TRUE!";
    dogbark.Play();
  }

  document.querySelector("#answer").innerText = "FALSE!";
  toy.Play();
}
