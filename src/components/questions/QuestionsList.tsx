import * as React from "react";
import "../qna.css";
import Question from "./Question";

interface IProps {
  questions: string[];
  changeQuestion: any;
}

interface IState {}

class QuestionsList extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const { questions, changeQuestion } = this.props;
    return (
      <div className="question-form">
        <p>Question</p>
        {questions.map((question: any, index: number) => {
          return (
            <Question
              key={index}
              question={question}
              index={index}
              changeQuestion={changeQuestion}
            />
          );
        })}
      </div>
    );
  }
}

export default QuestionsList;
