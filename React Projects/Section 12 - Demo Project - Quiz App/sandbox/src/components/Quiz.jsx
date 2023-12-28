import { useState, useCallback } from 'react';
import QUESTIONS from '../utils/QUESTIONS';
import Question from './Question';
import Summary from './Summary';

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const currentQuestionIndex = selectedAnswers.length;
  const isQuizComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectClick = useCallback(function handleSelectClick(answer) {
    setSelectedAnswers((prevState) => {
      return [...prevState, answer];
    });
  }, []);

  const noSelector = useCallback(
    () => handleSelectClick(null),
    [handleSelectClick]
  );

  if (isQuizComplete) {
    return (
      <Summary
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        QUESTIONS={QUESTIONS}
      />
    );
  }

  return (
    <div id='quiz'>
      <Question
        key={currentQuestionIndex}
        questionIndex={currentQuestionIndex}
        handleSelectClick={handleSelectClick}
        onSkip={noSelector}
      />
    </div>
  );
}
