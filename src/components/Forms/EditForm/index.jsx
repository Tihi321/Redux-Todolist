import React, { Component } from 'react';
import { SAVE_BUTTON_TEXT, CANCEL_BUTTON_TEXT } from '../../../config/constants.js';
import { Button, Form, FormGroup, Label, Input, ButtonGroup, FormFeedback } from 'reactstrap';

class EditForm extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChangeSubject = this.handleOnChangeSubject.bind(this);
    this.handleOnChangeMessage = this.handleOnChangeMessage.bind(this);
    this.state = {
      subject: '',
      message: ''
    }
  }

  componentDidMount(){
    this.setState({
      subject: this.props.activeTableRow.subject,
      message: this.props.activeTableRow.message
    });
  }

  handleOnChangeSubject = (e) => {
    this.setState({
      subject: e.target.value
    });
  }

  handleOnChangeMessage = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  toggle = (e) => {
    e.preventDefault();
    this.props.toggleEditModal();
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.subject.value.length < 1) {

      this.props.validationEditModal(false);

    } else {
      const todo = {
        subject: e.target.elements.subject.value,
        message: e.target.elements.message.value
      };

      this.props.editTodo(this.props.activeTableRow.uuid, todo);
      this.props.validationEditModal(true);

      this.toggle(e);
    }
  }

  render(){
    return (
      <div>
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <Label for="todoSubject">Ime zadatka</Label>
            <Input onChange={this.handleOnChangeSubject} value={this.state.subject} invalid={!this.props.validation} type="text" name="subject" id="todoSubject" placeholder="ime zadatka" />
            <FormFeedback>Ime nesmije ostati prazno</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="todoMessage">Upišite opis zadatka</Label>
            <Input onChange={this.handleOnChangeMessage} value={this.state.message} rows="5" type="textarea" name="message" id="todoMessage" placeholder="opis zadatka" />
          </FormGroup>
          <ButtonGroup>
            <Button color="primary" type="submit">{SAVE_BUTTON_TEXT}</Button>
            <Button color="primary" onClick={this.toggle}>{CANCEL_BUTTON_TEXT}</Button>
          </ButtonGroup>
        </Form>
      </div>
    );
  }
}
export default EditForm;