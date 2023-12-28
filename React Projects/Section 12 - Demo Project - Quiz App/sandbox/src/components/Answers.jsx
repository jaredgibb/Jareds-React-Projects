import { useRef } from 'react';

export default function Answers({
  answers,
  selectedAnswer,
  handleSelectClick,
  answerState,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = answer === selectedAnswer;
        let cssClasses = '';
        if (answerState === 'answered' && isSelected) {
          cssClasses = 'selected';
        }

        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li
            key={index}
            className='answer'>
            <button
              onClick={() => handleSelectClick(answer)}
              className={cssClasses}
              disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
