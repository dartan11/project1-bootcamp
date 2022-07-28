import React from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



export default class Multiplication extends React.Component {
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
      charmander: 0,
      bulbasaur: 0,
      squirtle: 0,
    }
  }

  questionGenerator = () => {
    let questions = []
    let answers = []

    for (let i = 0; i < 10; i++) {
      let number1 = Math.ceil(Math.random() * 8) + 1
      let number2 = Math.ceil(Math.random() * 8) + 1
      let question = `${number1} x ${number2} =`
      let answer = number1 * number2

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
      charmander: userDetails.charmander,
      bulbasaur: userDetails.bulbasaur,
      squirtle: userDetails.squirtle,
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
        let newUserPoints = userDetails.points + 10
        console.log(userDetails.points)
        localStorage.setItem("user", JSON.stringify({ name: userName, points: newUserPoints, charmander: this.state.charmander, bulbasaur: this.state.bulbasaur, squirtle: this.state.squirtle }))
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
        <Container>
          <Row>
            <Col>Multiplication</Col>
          </Row>
          <br />
          <Row>
            <Col>Instructions:</Col>
          </Row>
          <Row>
            <Col>Answer all questions and click submit, you will earn 10 points for every correct answer!</Col>
          </Row>
          <Row>
            <Col>
              <ol>
                {this.state.questions.map((value, index) => {
                  if (index < 5) {
                    return <li key={index}>{value} <input type="text" value={this.state[`question${index}`]} onInput={(event) => this.logUserAnswer(event, index)} disabled={this.state.disableButtons === true} /></li>
                  } else return null
                })}
              </ol>
            </Col >
            <Col>
              <ol start="6">
                {this.state.questions.map((value, index) => {
                  if (index >= 5) {
                    return <li key={index}>{value} <input type="text" value={this.state[`question${index}`]} onInput={(event) => this.logUserAnswer(event, index)} disabled={this.state.disableButtons === true} /></li>
                  } else return null
                })}
              </ol>

            </Col>
          </Row>
          <Button onMouseEnter={this.checkAnswers} onClick={this.submitAnswers}>Submit</Button>
          <Row>
            {this.state.disableButtons === true ? <div>You answered {this.state.numberOfCorrect} out of 10 questions correctly, you've earned {this.state.numberOfCorrect * 10} points! <br /> Go back to select a new category to earn more points!</div> : null}
          </Row>
          <Row>
            <Col><Button onClick={this.props.backToCategoryTrigger}>Select New Category</Button></Col>
          </Row>

        </Container>
      </div>
    )
  }
}
