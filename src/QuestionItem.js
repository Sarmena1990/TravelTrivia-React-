import React from 'react';
import './QuestionItem.css';
const QuestionItem = ({
  question,
  onClickChange,
  answers,
  correctAnswerSum,
  incorrectAnswerSum,
}) => {
  return (
    <div className="ui container">
      <button className="ui right floated button">Right Floated</button>
      <button className="ui left floated button">Left Floated</button>

      <h1>{question.question}</h1>

      <div className="container-ui ui vertical buttons">
        <button
          className="ui button"
          value={answers[answers.length - 1]}
          onClick={(e) => onClickChange(e.target.value)}
        >
          {answers.pop()}
        </button>
        <button
          className="ui button"
          value={answers[answers.length - 1]}
          onClick={(e) => onClickChange(e.target.value)}
        >
          {answers.pop()}
        </button>
        <button
          className="ui button"
          value={answers[answers.length - 1]}
          onClick={(e) => onClickChange(e.target.value)}
        >
          {answers.pop()}
        </button>
        <button
          className="ui button"
          value={answers[answers.length - 1]}
          onClick={(e) => onClickChange(e.target.value)}
        >
          {answers.pop()}
        </button>
      </div>
      <button className="ui right floated button">{incorrectAnswerSum}</button>
      <button className="ui left floated button">{correctAnswerSum}</button>
    </div>
  );
};

export default QuestionItem;
