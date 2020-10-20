import * as React from "react";
import "../qna.css";

interface IProps {
  answer: string;
  changeAnswer: any;
}

interface IState {}

class Answer extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { answer, changeAnswer } = this.props;
    return (
      <div className="answer-form">
        <form>
          <p>Réponse</p>
          <label htmlFor="answer">
            <input
              className="answer-input"
              type="text"
              name="answer"
              value={answer}
              onChange={changeAnswer}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Answer;
