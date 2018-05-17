import React from "react";
import { TITLE } from "../../config/constants";
import { ListGroupItem, Button } from "reactstrap";
import fire from "../../config/fire";
import styled from 'styled-components';

const Title = ({ className }) => {

  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <ListGroupItem className={className}>
      <Button onClick={logout} color="info">
        Odjava
      </Button>
      <h1>{TITLE}</h1>
    </ListGroupItem>
  );
};

export const TitleStyled = styled(Title)`
  border-radius: 5px;
`;