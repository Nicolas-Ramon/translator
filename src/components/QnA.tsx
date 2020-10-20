import * as React from "react";
import Answer from "../components/answer/Answer";
import QuestionsList from "../components/questions/QuestionsList";
import "../components/qna.css";

const axios = require("axios").default;
const uuidv4 = require("uuid/v4");

var subscriptionKey = process.env.REACT_APP_TRANSLATOR_API_KEY;

interface IProps {}

interface IState {
  questions: string[];
  answer: string;
}

class QnA extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: ["", "", "", ""],
      answer: "",
    };
  }

  //mise à jour state questions
  public changeQuestion = (question: any, index: number) => {
    this.setState({
      questions: this.state.questions.map(
        (currentQuestion: any, currentIndex: number) =>
          currentIndex === index ? question : currentQuestion
      ),
    });
  };

  //mise à jour state réponse
  public changeAnswer = (e: any) => {
    this.setState({
      answer: e.target.value,
    });
  };

  // formater données et traduction
  private handleLanguage = (e: any) => {
    e.preventDefault();
    let targetLanguage: string = e.target.value;
    let datasTemp = this.state;
    let datasToTranslate: any[] = [];
    let datasTranslated: string[] = [];
    // formater questions avant traduction
    for (let i in datasTemp.questions) {
      datasToTranslate.push({
        text: datasTemp.questions[i],
      });
    }
    // formater réponse avant traduction
    datasToTranslate.push({
      text: datasTemp.answer,
    });
    // appel API
    axios({
      baseURL: `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLanguage}`,
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Content-type": "application/json",
        "X-ClientTraceId": uuidv4().toString(),
      },
      data: datasToTranslate,
      responseType: "json",
    }).then((response: any) => {
      response.data.forEach((resp: any, j: number) => {
        datasTranslated[j] = resp.translations[0].text;
      });
      this.setState({
        questions: datasTranslated.slice(0, datasTemp.questions.length),
        answer: datasTranslated[datasTemp.questions.length],
      });
    });
  };

  render() {
    const { questions, answer } = this.state;
    return (
      <div>
        <h1>Test Translator TypeScript</h1>
        <div className="qna-container">
          <QuestionsList
            questions={questions}
            changeQuestion={(question: any, index: number) =>
              this.changeQuestion(question, index)
            }
          />
          <Answer answer={answer} changeAnswer={this.changeAnswer} />
          <div className="button-language">
            <button
              className="qna-container-button"
              value="fr"
              onClick={this.handleLanguage}
            >
              {" "}
              French{" "}
            </button>
            <button
              className="qna-container-button"
              value="en"
              onClick={this.handleLanguage}
            >
              {" "}
              English{" "}
            </button>
            <button
              className="qna-container-button"
              value="de"
              onClick={this.handleLanguage}
            >
              {" "}
              Deutsh{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QnA;
