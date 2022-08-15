import React from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import "../App.css";
import uss from '../images/uss.jpg'
import ps4 from '../images/PS4.jpg'
import haagendazs from '../images/haagendazs.jpeg'
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container'
// import Card from 'react-bootstrap/Card'



export default class RedemptionCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userPoints: 0,
      item1: 0,
      item2: 0,
      item3: 0
    }
  }

  componentDidMount() {
    let userDetails = (JSON.parse(localStorage.getItem("user")))
    this.setState({
      userName: userDetails.name,
      userPoints: userDetails.points,
      item1: userDetails.item1,
      item2: userDetails.item2,
      item3: userDetails.item3,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userPoints !== prevState.userPoints) {
      console.log(this.state.userPoints)
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, item1: this.state.item1, item2: this.state.item2, item3: this.state.item3 }))
    }
  }

  redeemItem1 = (event) => {
    if (this.state.userPoints < Number(event.target.value)) {
      alert("You do not have enough points for this redemption")
    } else {
      let newUserPoints = this.state.userPoints - Number(event.target.value)
      this.setState({
        userPoints: newUserPoints,
        item1: this.state.item1 + 1
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
        item2: this.state.item2 + 1
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
        item3: this.state.item3 + 1
      })
    }
  }

  render() {

    return (
      <div className="App">
        <br />
        <br />
        <div className="redemption">
          <Row>
            <Col>
              Welcome to the Redemption Counter!
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {this.state.userName}, you currently have {this.state.userPoints} points!
            </Col>
          </Row>
          <br />        <br />
          <Row>
            <Col className="centered">
              <Card style={{ width: '18rem' }}>
                <Card.Img className="fleximage" variant="top" src={haagendazs} />
                <Card.Body>
                  <Card.Title>1 Tub of Haagen Dazs Ice Cream</Card.Title>
                  <Card.Text>
                    10 points
                  </Card.Text>
                  <Button size="sm" variant="outline-dark" value="10" onClick={(event) => this.redeemItem1(event)}>Redeem</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="centered">

              <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ps4} />
                <Card.Body>
                  <Card.Title>15 Minutes of PS4 Play Time</Card.Title>
                  <Card.Text>
                    20 points
                  </Card.Text>
                  <Button size="sm" variant="outline-dark" value="20" onClick={(event) => this.redeemItem2(event)}>Redeem</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="centered">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={uss} />
                <Card.Body>
                  <Card.Title>1 Day of Fun at USS</Card.Title>
                  <Card.Text>
                    30000 points
                  </Card.Text>
                  <Button size="sm" variant="outline-dark" value="30000" onClick={(event) => this.redeemItem3(event)}>Redeem</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col><Button size="sm" variant="dark" onClick={this.props.backToCategoryTrigger}>Select Category</Button></Col>
            <Col><Button size="sm" variant="dark" value="see inventory" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>See your inventory!</Button></Col>
          </Row>
          <br />
          <br />
        </div>
      </div>
    )
  }
}