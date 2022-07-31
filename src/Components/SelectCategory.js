import React from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import "../App.css";
// import Container from '@mui/material/Container'



export default class SelectCategory extends React.Component {

  reset = () => {
    window.localStorage.removeItem('user')
    window.location.reload(false);
  }


  render() {
    let userDetails = (JSON.parse(localStorage.getItem("user")))
    return (

      <div className="App">
        <div className="selectCategory">
          <div id="selectCategoryHeaderText">Hello {userDetails.name}, <br /><br /><p>please select a category below</p></div>
          <br />
          <Row>
            <Col className="centercol"><div id="addition"><Button className="categoryselectbutton" variant="outline-dark" size="lg" value="addition" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Addition</Button></div></Col>
            <Col className="centercol"><div id="subtraction"><Button className="categoryselectbutton" variant="outline-dark" size="lg" value="subtraction" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Subtraction</Button></div></Col>
          </Row>
          <Row>
            <Col className="centercol"><div id="multiplication"><Button className="categoryselectbutton" variant="outline-dark" size="lg" value="multiplication" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Multiplication</Button></div></Col>
            <Col className="centercol"><div id="placeholder"><Button className="categoryselectbutton" variant="danger" size="sm" onClick={() => alert("Coming Soon!")}>Division <br />(Coming Soon!)</Button></div></Col>
          </Row>
          <Row>
            <Col className="centercol"><div id="placeholder"><Button className="categoryselectbutton" variant="danger" size="sm" onClick={() => alert("Coming Soon!")}>Grammar <br />(Coming Soon!)</Button></div></Col>
            <Col className="centercol"><div id="placeholder"><Button className="categoryselectbutton" variant="danger" size="sm" onClick={() => alert("Coming Soon!")}>Vocabulary <br />(Coming Soon!)</Button></div></Col>
          </Row>
          <br />
          <Row>
            <Col className="centercol"><Button size="lg" variant="dark" value="redemption" onClick={(event) => this.props.updateCategoryStateTrigger(event)}>Redeem prizes with your points! </Button><br /><p id="pointsinfo">{userDetails.name}, you currently have {userDetails.points} points</p></Col>
          </Row>
          <br />
          <Button onClick={this.reset}>Start a new session</Button>
        </div>
      </div>


    )
  }
}

