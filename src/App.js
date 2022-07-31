import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputName from './Components/InputName'
import SelectCategory from "./Components/SelectCategory";
import Addition from "./Components/Addition";
import Subtraction from "./Components/Subtraction";
import Multiplication from "./Components/Multiplication";
import RedemptionCounter from "./Components/RedemptionCounter";
import Inventory from "./Components/Inventory";

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';


// import Container from '@mui/material/Container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      currState: "input name",
      userName: "",
      userPoints: 0,
      userInventory: [],
      item1: 0,
      item2: 0,
      item3: 0,
    }
  }

  inputNameValue = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submitNameValue = (event) => {
    event.preventDefault()
    this.setState({
      userName: this.state.input,
    })
  }

  reset = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  }

  updateCategoryState = (event) => {
    this.setState({
      currState: event.target.value
    })
  }


  backToCategories = () => {
    this.setState({
      currState: "choose category"
    })
  }

  componentDidMount() {
    if (localStorage.getItem("user") !== null) {
      this.setState({
        currState: "choose category"
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userName !== prevState.userName) {
      this.setState({
        currState: "choose category"
      })
      localStorage.setItem("user", JSON.stringify({ name: this.state.userName, points: this.state.userPoints, item1: this.state.item1, item2: this.state.item2, item3: this.state.item3 }))
      let userDetails = (JSON.parse(localStorage.getItem("user")))
      console.log(userDetails.name)
    }



    if (this.state.currState !== prevState.currState) {
      console.log("current state is", this.state.currState)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.currState === "input name" && <InputName onType={this.inputNameValue} onUpdate={this.submitNameValue} />}
          {this.state.currState === "choose category" && <SelectCategory userName={this.state.userName} userPoints={this.state.userPoints} updateCategoryStateTrigger={(event) => this.updateCategoryState(event)} newSession={this.reset} />}
          {this.state.currState === "addition" && <Addition backToCategoryTrigger={this.backToCategories} resetCategoryTrigger={this.resetCategory} />}
          {this.state.currState === "subtraction" && <Subtraction backToCategoryTrigger={this.backToCategories} />}
          {this.state.currState === "multiplication" && <Multiplication backToCategoryTrigger={this.backToCategories} />}
          {this.state.currState === "redemption" && <RedemptionCounter backToCategoryTrigger={this.backToCategories} updateCategoryStateTrigger={(event) => this.updateCategoryState(event)} />}
          {this.state.currState === "see inventory" && <Inventory backToCategoryTrigger={this.backToCategories} updateCategoryStateTrigger={(event) => this.updateCategoryState(event)} />}

        </header>
      </div>
    )
  }
}

export default App;