import {useRef} from 'react';

export default function Answers({ answers, selectedAnswer, handleSelectClick, answerState }) {
     const shuffledAnswers = useRef();
     
      if (!shuffledAnswers.current) {
            shuffledAnswers.current = [
              ...answers
            ].sort(() => Math.random() - 0.5);
          }

  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected =
          answer === selectedAnswer ;
        let cssClasses = '';
        if (answerState === 'answered' && isSelected) {
          cssClasses = 'selected';
        } else if (answerState === 'correct' && isSelected) {
          cssClasses = 'correct';
        } else if (answerState === 'incorrect' && isSelected) {
          cssClasses = 'wrong';
        }

        return (
          <li
            key={index}
            className='answer'>
            <button
              onClick={() => handleSelectClick(answer)}
              className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
