import React from "react";
import { TITLE } from "../../config/constants";
import { ListGroupItem, Button } from "reactstrap";
import fire from "../../config/fire";
import styled from "styled-components";

const Title = ({ className }) => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <ListGroupItem className={className}>
      <h1>{TITLE}</h1>
      <Button onClick={logout} color="info">
        Odjava
      </Button>
    </ListGroupItem>
  );
};

export const TitleStyled = styled(Title)`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: space-between;
  color: #ea7331;
`;
