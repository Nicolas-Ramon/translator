import * as React from 'react';
import '../qna.css';

class Answer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
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