import * as React from "react";
import "../qna.css";

interface IProps {
  key: number;
  question: string;
  index: number;
  changeQuestion: any;
}

interface IState {}

class Question extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  private updateQuestion = (e: any) => {
    this.props.changeQuestion(e.target.value, this.props.index);
  };

  render() {
    const { question, index } = this.props;
    return (
      <div className="question">
        <form>
          <label htmlFor="">
            <input
              className="question-input"
              type="text"
              name={"question" + (index + 1)}
              value={question}
              onChange={this.updateQuestion}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Question;
