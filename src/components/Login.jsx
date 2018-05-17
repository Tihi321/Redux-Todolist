import React from 'react';
import { LOGIN_BUTTON_TEXT } from '../config/constants.js';
import { Button, Form, FormGroup, Label, Input, ButtonGroup, Alert } from 'reactstrap';
import fire from '../config/fire';
import styled from "styled-components";

const Login = (props) => {
console.log();
  const handleOnSubmit = (e) => {
    e.preventDefault(e);
    const useremail = e.target.userEmail.value;
    const password = e.target.userPassword.value;
    fire.auth().signInWithEmailAndPassword(useremail, password).then((u)=>{
      props.authenticateUser(true);
    }).catch((error) => {
        console.log(error);
        props.failedAttempt(true);
      });
  }

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <Label for="userEmail">Nadimak</Label>
          <Input type="email" name="userEmail" id="userEmail" required />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Lozinka</Label>
          <Input type="password" name="userPassword" id="userPassword" required />
        </FormGroup>
        <ButtonGroup>
          <Button color="primary" type="submit">{LOGIN_BUTTON_TEXT}</Button>
        </ButtonGroup>
        {props.attempt ? ( <Alert color="danger mt-2">
        Password ili lozinka nisu točni 
      </Alert> ) : ( '' )}
      </Form>
    </div>
  );
}

export const LoginStyled = styled(Login) `
  border-radius: 5px;
`;
