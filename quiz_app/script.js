const quizForm = document.querySelector('#quiz-form');
const resultsContainer = document.querySelector('#results');

const correctAnswers = ['b', 'b'];

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let score = 0;
  const userAnswers = [quizForm.q1.value, quizForm.q2.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });

  resultsContainer.innerHTML = `You scored ${score} out of ${correctAnswers.length}.`;
});
