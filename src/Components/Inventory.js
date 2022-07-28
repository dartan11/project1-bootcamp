import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
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
    if (this.state.charmander !== prevState.charmander) {
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, charmander: this.state.charmander, bulbasaur: this.state.bulbasaur, squirtle: this.state.squirtle }))
    }
    if (this.state.bulbasaur !== prevState.bulbasaur) {
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, charmander: this.state.charmander, bulbasaur: this.state.bulbasaur, squirtle: this.state.squirtle }))
    }
    if (this.state.squirtle !== prevState.squirtle) {
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, charmander: this.state.charmander, bulbasaur: this.state.bulbasaur, squirtle: this.state.squirtle }))
    }
  }

  useItem1 = () => {
    if (this.state.charmander < 1) {
      alert("You do not have any of this prize in your inventory")
    } else {
      this.setState({
        charmander: this.state.charmander - 1
      })
    }
  }

  useItem2 = () => {
    if (this.state.bulbasaur < 1) {
      alert("You do not have any of this prize in your inventory")
    } else {
      this.setState({
        bulbasaur: this.state.bulbasaur - 1
      })
    }
  }
  useItem3 = () => {
    if (this.state.squirtle < 1) {
      alert("You do not have any of this prize in your inventory")
    } else {
      this.setState({
        squirtle: this.state.squirtle - 1
      })
    }
  }



  render() {
    // let userDetails = (JSON.parse(localStorage.getItem("user")))

    return (
      <div className="App">

        <Row>
          <Col>Charmander<br />inventory: {this.state.charmander}<br /><Button onClick={this.useItem1}>Use Now!</Button></Col>
          <Col>Bulbasaur<br />inventory: {this.state.bulbasaur}<br /><Button onClick={this.useItem2}>Use Now!</Button></Col>
          <Col>Squirtle<br />inventory: {this.state.squirtle}<br /><Button onClick={this.useItem3}>Use Now!</Button></Col>
        </Row><br /><br />
        <Row>
          <Col><Button value="redemption" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Back to Redemptions</Button></Col>
          <Col><Button onClick={this.props.backToCategoryTrigger}>Back to Select Categories</Button></Col>
        </Row>
      </div>
    )
  }
}