import React from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
// import Card from 'react-bootstrap/Card'



export default class RedemptionCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userPoints: 0,
      charmander: 0,
      bulbasaur: 0,
      squirtle: 0
    }
  }
  componentDidMount() {
    let userDetails = (JSON.parse(localStorage.getItem("user")))
    this.setState({
      userName: userDetails.name,
      userPoints: userDetails.points,
      charmander: userDetails.charmander,
      bulbasaur: userDetails.bulbasaur,
      squirtle: userDetails.squirtle,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userPoints !== prevState.userPoints) {
      console.log(this.state.userPoints)
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, charmander: this.state.charmander, bulbasaur: this.state.bulbasaur, squirtle: this.state.squirtle }))
    }
  }

  redeemItem1 = (event) => {
    if (this.state.userPoints < Number(event.target.value)) {
      alert("You do not have enough points for this redemption")
    } else {
      let newUserPoints = this.state.userPoints - Number(event.target.value)
      this.setState({
        userPoints: newUserPoints,
        charmander: this.state.charmander + 1
      })
    }
  }

  redeemItem2 = (event) => {
    if (this.state.userPoints < Number(event.target.value)) {
      alert("You do not have enough points for this redemption")
    } else {
      let newUserPoints = this.state.userPoints - Number(event.target.value)
      this.setState({
        userPoints: newUserPoints,
        bulbasaur: this.state.bulbasaur + 1
      })
    }
  }

  redeemItem3 = (event) => {
    if (this.state.userPoints < Number(event.target.value)) {
      alert("You do not have enough points for this redemption")
    } else {
      let newUserPoints = this.state.userPoints - Number(event.target.value)
      this.setState({
        userPoints: newUserPoints,
        squirtle: this.state.squirtle + 1
      })
    }
  }

  render() {



    // const redeemItem = (event) => {
    //   if (this.state.userPoints < event.target.value) {
    //     alert("You do not have enough points for this redemption")
    //   } else {
    //     this.setState({
    //       userPoints: userDetails.points - Number(event.target.value)
    //     })
    //     let newUserDetails = { name: this.state.userName, points: this.state.userPoints }
    //     localStorage.setItem("user", JSON.stringify({ name: newUserDetails.name, points: newUserDetails.points }))
    //     console.log("userpoints in redemption counter: ", newUserDetails.points)
    //   }
    // }

    return (
      <div className="App">

        <Row>
          <Col>
            Welcome to the Redemption Counter!
          </Col>
        </Row>
        <br />        <br />
        <Row>
          <Col>
            {this.state.userName}, you currently have {this.state.userPoints} points!
          </Col>
        </Row>
        <br />        <br />
        <Row>
          <Col>Charmander <br /> 10 points<br /><Button value="10" onClick={(event) => this.redeemItem1(event)}>Redeem</Button></Col>
          <Col>Bulbasaur <br />100 points<br /><Button value="20" onClick={(event) => this.redeemItem2(event)}>Redeem</Button></Col>
          <Col>Squirtle<br />900 points<br /><Button value="30" onClick={(event) => this.redeemItem3(event)}>Redeem</Button></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col><Button onClick={this.props.backToCategoryTrigger}>Select Category</Button></Col>
          <Col><Button value="see inventory" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>See your inventory!</Button></Col>

        </Row>

      </div>
    )
  }
}
