import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";
import uss from '../images/uss.jpg'
import ps4 from '../images/PS4.jpg'
import haagendazs from '../images/haagendazs.jpeg'
import Card from 'react-bootstrap/Card';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
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
    if (this.state.item1 !== prevState.item1) {
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, item1: this.state.item1, item2: this.state.item2, item3: this.state.item3 }))
    }
    if (this.state.item2 !== prevState.item2) {
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, item1: this.state.item1, item2: this.state.item2, item3: this.state.item3 }))
    }
    if (this.state.item3 !== prevState.item3) {
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, item1: this.state.item1, item2: this.state.item2, item3: this.state.item3 }))
    }
  }

  useItem1 = () => {
    if (this.state.item1 < 1) {
      alert("You do not have any of this prize in your inventory")
    } else {
      this.setState({
        item1: this.state.item1 - 1
      })
      alert(`You have redeemed 1 tub of Haagen Dazs ice cream, you have ${this.state.item1 - 1} tub(s) left in your inventory`)
    }
  }

  useItem2 = () => {
    if (this.state.item2 < 1) {
      alert("You do not have any of this prize in your inventory")
    } else {
      this.setState({
        item2: this.state.item2 - 1
      })
      alert(`You have redeemed 15 minutes of PS4 play time, you have ${(this.state.item2 - 1) * 15} minutes left in your inventory`)
    }
  }
  useItem3 = () => {
    if (this.state.item3 < 1) {
      alert("You do not have any of this prize in your inventory")
    } else {
      this.setState({
        item3: this.state.item3 - 1
      })
      alert(`You have redeemed 1 day of fun at USS, you have ${this.state.item3 - 1} day(s) left in your inventory`)
    }
  }



  render() {

    return (
      <div className="App">
        <div className="redemption">
          <Row>
            <Col>
              Check out what you have in your inventory!
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col className="centered">
              <Card style={{ width: '18rem' }}>
                <Card.Img className="fleximage" variant="top" src={haagendazs} />
                <Card.Body>
                  <Card.Title>1 Tub of Haagen Dazs Ice Cream</Card.Title>
                  <Card.Text>
                    <b>Inventory: {this.state.item1}</b>
                  </Card.Text>
                  <Button size="sm" variant="outline-dark" value="10" onClick={this.useItem1}>Use Now!</Button>
                </Card.Body>
              </Card>
            </Col>


            <Col className="centered">
              <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ps4} />
                <Card.Body>
                  <Card.Title>15 Minutes of PS4 Play Time</Card.Title>
                  <Card.Text>
                    <b>Inventory: {this.state.item2}</b>
                  </Card.Text>
                  <Button size="sm" variant="outline-dark" value="20" onClick={this.useItem2}>Use Now!</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="centered">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={uss} />
                <Card.Body>
                  <Card.Title>1 Day of Fun at USS</Card.Title>
                  <Card.Text>
                    <b>Inventory: {this.state.item3}</b>
                  </Card.Text>
                  <Button size="sm" variant="outline-dark" value="30" onClick={this.useItem3}>Use Now!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row><br /><br />
          <Row>
            <Col><Button size="sm" variant="dark" value="redemption" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Back to Redemptions</Button></Col>
            <Col><Button size="sm" variant="dark" onClick={this.props.backToCategoryTrigger}>Back to Select Categories</Button></Col>
          </Row>
        </div></div>
    )
  }
}