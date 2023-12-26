import { useState, useCallback } from 'react';
import QUESTIONS from '../utils/QUESTIONS';
import quizComplete from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  //we know what question the user is on by knowing how many items are in the array.
  //we can use the length of the array to determine the current question
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const currentQuestionIndex = selectedAnswers.length;

  const handleSelectClick = useCallback(function handleSelectClick(answer) {
    setSelectedAnswers((prevState) => {
      return [...prevState, answer];
    });
  }, []);

  const noSelector = useCallback(
    () => handleSelectClick(null),
    [handleSelectClick]
  );

  const Summary = () => {
    const correctAnswers = selectedAnswers.filter((answer, index) => {
      return answer === QUESTIONS[index].answers[0];
    });

    return (
      <div id='summary'>
        <h2>Summary</h2>
        <img
          src={quizComplete}
          alt='Quiz complete'
        />
        <p>
          You answered {correctAnswers.length} out of {QUESTIONS.length}{' '}
          questions correctly.
        </p>
        <button onClick={() => setSelectedAnswers([])}>Restart</button>
      </div>
    );
  };

  const currentAnswers = [
    ...(QUESTIONS?.[currentQuestionIndex]?.answers || []),
  ];
  const Quiz = () => {
    return (
      <div id='quiz'>
        <div id='question'>
          <QuestionTimer
            key={currentQuestionIndex}
            timeExpired={() => noSelector()}
            timeout={10000}
          />
          <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
          <ul id='answers'>
            {currentAnswers
              .sort(() => Math.random() - 0.5)
              .map((answer, index) => {
                return (
                  <li
                    key={index}
                    className='answer'>
                    <button onClick={() => handleSelectClick(answer)}>
                      {answer}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>{currentQuestionIndex === QUESTIONS.length ? <Summary /> : <Quiz />}</>
  );
}
