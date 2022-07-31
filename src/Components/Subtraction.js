import React from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import "../App.css";



export default class Subtraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      question0: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      numberOfCorrect: 0,
      points: 0,
      userAnswersArr: [],
      disableButtons: false,
      item1: 0,
      item2: 0,
      item3: 0,
    }
  }

  questionGenerator = () => {
    let questions = []
    let answers = []

    for (let i = 0; i < 10; i++) {
      let number1 = Math.ceil(Math.random() * 20)
      let number2 = Math.ceil(Math.random() * 20) + 1
      while (number1 <= number2) {
        number1 = Math.ceil(Math.random() * 20)
        number2 = Math.ceil(Math.random() * 20) + 1
      }
      let question = `${number1} - ${number2} =`
      let answer = number1 - number2
      questions.push(question)
      answers.push(answer)
    }
    this.setState({
      questions: [...questions],
      answers: [...answers]
    })
  }

  componentDidMount() {
    this.questionGenerator()
    let userDetails = (JSON.parse(localStorage.getItem("user")))
    this.setState({
      item1: userDetails.item1,
      item2: userDetails.item2,
      item3: userDetails.item3,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userAnswersArr !== prevState.userAnswersArr) {
      console.log(this.state.userAnswersArr)
    }

    if (this.state.numberOfCorrect !== prevState.numberOfCorrect) {
      console.log(this.state.numberOfCorrect)
      for (let i = 0; i < this.state.numberOfCorrect; i++) {
        let userDetails = (JSON.parse(localStorage.getItem("user")))
        console.log(userDetails)
        let userName = userDetails.name
        console.log(userDetails.name)
        let newUserPoints = userDetails.points + 15
        console.log(userDetails.points)
        localStorage.setItem("user", JSON.stringify({ name: userName, points: newUserPoints, item1: this.state.item1, item2: this.state.item2, item3: this.state.item3 }))
        console.log(userDetails.name)
        console.log(userDetails.points)
      }
    }
  }

  logUserAnswer = (event, index) => {
    this.setState({
      [`question${index}`]: event.target.value
    })
  }

  checkAnswers = () => {
    this.setState({
      userAnswersArr: [Number(this.state.question0), Number(this.state.question1), Number(this.state.question2), Number(this.state.question3), Number(this.state.question4), Number(this.state.question5), Number(this.state.question6), Number(this.state.question7), Number(this.state.question8), Number(this.state.question9)]
    })
  }

  submitAnswers = () => {
    let correctAnswers = 0;
    for (let i = 0; i < this.state.userAnswersArr.length; i++) {
      if (this.state.userAnswersArr[i] === this.state.answers[i]) {
        correctAnswers += 1
      }
    }
    this.setState({
      numberOfCorrect: correctAnswers,
      disableButtons: true
    })
    console.log(this.state.numberOfCorrect)
  }

  render() {


    return (
      <div className="App">
        <div className="Category-header">
          <Row>
            <Col className="fontchange">Subtraction</Col>
          </Row>
          <br />
          <Row>
            <Col className="fontchange">Instructions:</Col>
          </Row>
          <Row>
            <Col className="fontchange">Answer all questions and click submit, <br />you will earn 15 points for every correct answer!</Col>
          </Row>
          <br />
          <Row>
            <Col>
              <ol>
                {this.state.questions.map((value, index) => {
                  if (index < 5) {
                    return <li key={index}>{value} <input type="text" className="categoryinput" value={this.state[`question${index}`]} onInput={(event) => this.logUserAnswer(event, index)} disabled={this.state.disableButtons === true} /></li>
                  } else return null
                })}
              </ol>
            </Col >
            <Col>
              <ol start="6">
                {this.state.questions.map((value, index) => {
                  if (index >= 5) {
                    return <li key={index}>{value} <input type="text" className="categoryinput" value={this.state[`question${index}`]} onInput={(event) => this.logUserAnswer(event, index)} disabled={this.state.disableButtons === true} /></li>
                  } else return null
                })}
              </ol>

            </Col>
          </Row>
          <br />
          <Button variant="light" size="lg" onMouseEnter={this.checkAnswers} onClick={this.submitAnswers}>Submit</Button>
          <br />
          <Row>
            {this.state.disableButtons === true ? <div>You answered {this.state.numberOfCorrect} out of 10 questions correctly, you've earned {this.state.numberOfCorrect * 15} points! <br /> Click on the button below to select a new category!<br /><br /></div> : null}
          </Row>

          <Row>
            <Col><Button variant="outline-light" size="sm" onClick={this.props.backToCategoryTrigger}>Select New Category</Button></Col>
          </Row>
          <br />

        </div>
      </div>
    )
  }
}
