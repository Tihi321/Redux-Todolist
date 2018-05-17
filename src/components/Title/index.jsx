import React from "react";
import { TITLE } from "../../config/constants.js";
import fire from "../../config/fire";
import { Button } from "reactstrap";

export const Title = ({ className }) => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div className={className}>
      <h2>{TITLE}</h2>
      <Button onClick={logout} color="info">
        Odjava
      </Button>
    </div>
  );
};
