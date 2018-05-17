import React from "react";
import { LOGIN_BUTTON_TEXT } from "../config/constants.js";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Alert
} from "reactstrap";
import styled from "styled-components";

const Login = props => {
  console.log();
  const handleOnSubmit = e => {
    e.preventDefault(e);
    const useremail = e.target.userEmail.value;
    const password = e.target.userPassword.value;

    if ((password === 'Flipkod54321') && (useremail === 'flipkod@flipkod.hr' )){
      props.authenticateUser(true);
    } else {
      props.failedAttempt(true);
    }

  };

  return <div>
      <Form onSubmit={handleOnSubmit} className={props.className}>
        <FormGroup>
          <Label for="userEmail">Nadimak</Label>
          <Input type="email" name="userEmail" id="userEmail" required />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Lozinka</Label>
          <Input type="password" name="userPassword" id="userPassword" required />
        </FormGroup>
        <ButtonGroup>
          <Button color="primary" type="submit">
            {LOGIN_BUTTON_TEXT}
          </Button>
        </ButtonGroup>
        {props.attempt ? <Alert color="danger mt-2">
            Password ili lozinka nisu točni
          </Alert> : ""}
      </Form>
    </div>;
};

export const LoginStyled = styled(Login)`
  max-width: 600px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0.2);
  border: 3px solid #ef8931;
  border-radius: 8px;
  padding: 2em;
  margin: 0 auto;
`;
