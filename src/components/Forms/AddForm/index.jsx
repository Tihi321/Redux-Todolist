import React from "react";
import {
  SAVE_BUTTON_TEXT,
  CANCEL_BUTTON_TEXT
} from "../../../config/constants.js";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  FormFeedback
} from "reactstrap";
import uuidv4 from "uuid/v4";
import { firebaseAdd } from "../../../middleware/firebase";

const AddForm = props => {

  const addTodo = (subject, message) => {
    return {
        created: JSON.stringify(new Date()),
        message: message,
        selected: false,
        subject: subject,
        uuid: uuidv4()
    };
  };

  const toggle = e => {
    e.preventDefault();
    props.addToggleModal();
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (e.target.elements.subject.value.length < 1) {
      props.validationAddModal(false);
    } else {
      const subject = e.target.elements.subject.value;
      const message = e.target.elements.message.value;

      props.validationAddModal(true);
      firebaseAdd(addTodo(subject, message));

      toggle(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <Label for="todoSubject">Ime zadatka</Label>
          <Input
            invalid={!props.validation}
            type="text"
            name="subject"
            id="todoSubject"
            placeholder="ime zadatka"
          />
          <FormFeedback>Ime nesmije ostati prazno</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="todoMessage">Upišite opis zadatka</Label>
          <Input
            rows="5"
            type="textarea"
            name="message"
            id="todoMessage"
            placeholder="opis zadatka"
          />
        </FormGroup>
        <ButtonGroup>
          <Button color="primary" type="submit">
            {SAVE_BUTTON_TEXT}
          </Button>
          <Button color="primary" onClick={toggle}>
            {CANCEL_BUTTON_TEXT}
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};
export default AddForm;
