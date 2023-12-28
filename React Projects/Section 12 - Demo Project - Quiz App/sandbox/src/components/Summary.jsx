import quizComplete from '../assets/quiz-complete.png';

export default function Summary({
  selectedAnswers,
  setSelectedAnswers,
  QUESTIONS,
}) {
  let score = 0;
  for (let answer in selectedAnswers) {
    if (selectedAnswers[answer] === QUESTIONS[answer].answers[0]) {
      score++;
    }
  }

  const results = selectedAnswers.map((answer, index) => {
    const question = QUESTIONS[index];
    const isCorrect = question.answers[0] === answer;
    return (
      <li key={index}>
        <p className='question'> {question.text}</p>
                {isCorrect ? 'Correct' : 'Wrong'} - {answer === null ? 'Skipped' : answer}
                {!isCorrect && (<p> the correct answer is - { question.answers[0]}</p>)} 
      </li>
    );
  });

  return (
    <div id='summary'>
      <h2>Summary</h2>
      <img
        src={quizComplete}
        alt='Quiz complete'
      />
      <p>
            You scored <span className='number'>{(score / QUESTIONS.length).toFixed(2) * 100}%</span>
            {score / QUESTIONS.length > 0.5 ? (
                  <p>Well done!</p>
            ) : score / QUESTIONS.length > 0.3 ? (
                  <p>Good effort!</p>
            ) : (
                  <p>Try again!</p>
            )}
      </p>
      <ul>{results}</ul>
      <button onClick={() => setSelectedAnswers([])}>Restart</button>
    </div>
  );
}
