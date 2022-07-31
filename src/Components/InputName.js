import React from "react";
import "../App.css";
import inputnameheader from '../images/inputnamepageheader.png'

export default class InputName extends React.Component {


  render() {
    return (
      <div className="inputNameContainer">
        <div className="inputNameHeaderText">
          <img src={inputnameheader} alt="Mind Games, exercise your brain!" id="inputNameHeaderImage" />
        </div>
        <div className="inputName">
          <p id="inputNameMainText">Please input your name:</p>
          <input placeholder="Input name and press <enter>" autoComplete="off" type="text" id="inputNameField" onChange={event => this.props.onType(event)} onKeyPress={event => {
            if (event.key === 'Enter') {
              this.props.onUpdate(event)
            }
          }
          } />
        </div>
      </div>
    )
  }
}