import React, { Component } from 'react';
// import './App.css';
import Questions from './Questions';
// import './index.css';

class App extends Component {
  state = {
    questions: [],
    question: [],
    questionNum: 1,
    answers: [],
    correctAnswerSum: 0,
    incorrectAnswerSum: 0,
  };
  async componentDidMount() {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=20&type=multiple'
    ).then((res) => res.json());

    this.setState({
      questions: response.results,
      question: response.results[0],
      questionNum: 0,
      answers: this.shuffle(response.results[0]),
    });
  }
  onClickChange = (term) => {
    const { questions, questionNum } = this.state;
    console.log(term);
    console.log(questions[questionNum].correct_answer);

    if (questions && questionNum < 19) {
      if (questions[questionNum].correct_answer === term) {
        this.setState({
          question: questions[questionNum + 1],
          questionNum: questionNum + 1,
          answers: this.shuffle(questions[questionNum + 1]),
          correctAnswerSum: this.state.correctAnswerSum + 1,
        });
      } else {
        this.setState({
          question: questions[questionNum + 1],
          questionNum: questionNum + 1,
          answers: this.shuffle(questions[questionNum + 1]),
          incorrectAnswerSum: this.state.incorrectAnswerSum + 1,
        });
      }
    } else if (questionNum >= 19) {
      if (questions[questionNum].correct_answer === term) {
        this.setState({
          correctAnswerSum: this.state.correctAnswerSum + 1,
        });
      } else {
        this.setState({
          incorrectAnswerSum: this.state.incorrectAnswerSum + 1,
        });
      }
      this.componentDidMount();
    }
  };

  shuffle = (question) => {
    var arrAnswers = [];
    question.incorrect_answers.forEach((element) => {
      arrAnswers.push(element);
    });
    arrAnswers.push(question.correct_answer);

    arrAnswers.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    return arrAnswers;
  };

  render() {
    console.log(this.state.questions);
    return (
      <div>
        <Questions
          onClickChange={this.onClickChange}
          questions={this.state.questions}
          question={this.state.question}
          answers={this.state.answers}
          correctAnswerSum={this.state.correctAnswerSum}
          incorrectAnswerSum={this.state.incorrectAnswerSum}
        ></Questions>
      </div>
    );
  }
}

export default App;
