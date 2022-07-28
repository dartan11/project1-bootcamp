import React from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Container from '@mui/material/Container'



export default class SelectCategory extends React.Component {

  render() {
    let userDetails = (JSON.parse(localStorage.getItem("user")))
    return (

      <div className="App">
        <header className="App-header">
          <div>Hello {userDetails.name}, please select a category below:</div>
          <br /><br />
          <Row>
            <Col><Button value="addition" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Addition</Button></Col>
            <Col><Button value="subtraction" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Subtraction</Button></Col>
            <Col><Button value="multiplication" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Multiplication</Button></Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col><Button onClick={() => alert("Coming Soon!")}>Grammar <br />(Coming Soon!)</Button></Col>
            <Col><Button onClick={() => alert("Coming Soon!")}>Vocabulary <br />(Coming Soon!)</Button></Col>
          </Row>
          <br />
          <br />
          <Row><Button value="redemption" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Prize Redemption Counter</Button></Row>
          <br />
          <Row>{userDetails.name}, you currently have {userDetails.points} points</Row>
          <Button onClick={this.props.newSession}>Start a new session</Button>
        </header>
      </div>

    )
  }
}