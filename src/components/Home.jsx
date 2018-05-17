import React from "react";
import { AppStyled } from "./App.jsx";
import { LoginStyled } from "./Login.jsx";

const Home = (props) => {
  return (
    <div className="container mt-5">
      {props.loginData.validation ? (
        <AppStyled data={props.data} funcs={props.funcs} />
      ) : (
        <LoginStyled
          authenticateUser={props.login.authenticateUser}
          failedAttempt={props.login.failedAttempt}
          attempt={props.loginData.attempt}
        />
      )}
    </div>
  );
};

export default Home;
