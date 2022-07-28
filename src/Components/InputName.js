import React from "react";
import Form from 'react-bootstrap/Form';

export default class InputName extends React.Component {


  render() {
    return (
      <div className="inputNameContainer">
        <div className="inputNameHeaderText">
          Exercise Your Brain!
        </div>
        <div className="inputName">
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Please input your name:</Form.Label>
              <br /><br />
              <Form.Control placeholder="Input name and press <Enter>" onChange={event => this.props.onType(event)} onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.props.onUpdate(event)
                }
              }
              } />
            </Form.Group>
          </Form>
        </div>
      </div>
    )
  }
}