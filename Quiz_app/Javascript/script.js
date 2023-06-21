function checkAnswers() {
    const answers = ["a", "c", "a", "b", "a", "a"];
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const result = document.getElementById('result');

    if (q1 && q2 && q3 && q4 && q5 && q6) {
      const userAnswers = [q1.value, q2.value, q3.value, q4.value, q5.value, q6.value];
      let score = 0;

      for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === answers[i]) {
          score++;
        }
      }

      result.innerHTML = `You scored ${score} out of ${answers.length}!`;
    } else {
      result.innerHTML = "Please answer all questions.";
    }
  }