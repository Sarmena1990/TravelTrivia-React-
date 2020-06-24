import React from 'react';
import QuestionItem from './QuestionItem';

const Questions = ({
  onClickChange,
  question,
  answers,
  correctAnswerSum,
  incorrectAnswerSum,
}) => {
  return (
    <QuestionItem
      question={question}
      onClickChange={onClickChange}
      answers={answers}
      correctAnswerSum={correctAnswerSum}
      incorrectAnswerSum={incorrectAnswerSum}
    ></QuestionItem>
  );
};

export default Questions;
