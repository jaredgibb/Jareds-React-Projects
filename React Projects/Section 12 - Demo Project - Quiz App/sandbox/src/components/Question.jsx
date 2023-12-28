import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import QUESTIONS from '../utils/QUESTIONS';

import { useState } from 'react';
export default function Question({ handleSelectClick, onSkip, questionIndex }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timer = 5000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer((prevState) => {
      return {
        ...prevState,
        selectedAnswer: answer,
      };
    });

    setTimeout(() => {
      setAnswer((prevState) => {
        return {
          ...prevState,
          isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
        };
      });

      setTimeout(() => {
        handleSelectClick(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id='question'>
      <QuestionTimer
        key={timer}
        timeExpired={answer.selectedAnswer === '' ? onSkip : null}
        timeout={timer}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        handleSelectClick={handleSelectAnswer}
      />
    </div>
  );
}
