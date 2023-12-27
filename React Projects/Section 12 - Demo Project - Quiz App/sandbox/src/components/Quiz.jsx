import { useState, useCallback, memo } from 'react';
import QUESTIONS from '../utils/QUESTIONS';
import quizComplete from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
const AnswersMemo = memo(Answers);

export default function Quiz() {
  const [answerState, setAnswerState] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const currentQuestionIndex =
    answerState === '' ? selectedAnswers.length : selectedAnswers.length - 1;
  const isQuizComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectClick = useCallback(
    function handleSelectClick(answer) {
      setAnswerState('answered');
      setSelectedAnswers((prevState) => {
        return [...prevState, answer];
      });

      setTimeout(() => {
        if (answer === QUESTIONS[currentQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('incorrect');
        }
        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [currentQuestionIndex]
  );

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

  const Quiz = () => {
    return (
      <div id='quiz'>
        <div id='question'>
          <QuestionTimer
            key={currentQuestionIndex}
            timeExpired={() => noSelector()}
            timeout={5000}
          />
          <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
          <AnswersMemo
            answers={QUESTIONS[currentQuestionIndex].answers}
            answerState={answerState}
            selectedAnswer={selectedAnswers[selectedAnswers.length - 1]}
            handleSelectClick={handleSelectClick}
          />
        </div>
      </div>
    );
  };

  return <>{isQuizComplete ? <Summary /> : <Quiz />}</>;
}
