import * as React from "react";
import { FlexColumnSpaceBetween, FlexColumnSpaceBetweenForm } from "../styles";
import { Link } from "react-router-dom";

const { useState } = React;

const CreateAccount = () => {
  const [name, setName] = useState(""); // todo: figure this ish out later

  return (
    <FlexColumnSpaceBetween>
      <h1>Create account</h1>
      <FlexColumnSpaceBetweenForm>
        <label>
          First name
          <input type="text" name="firstName" />
        </label>
        <label>
          Surname
          <input type="text" name="surname" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <Link to="personal-information">Continue</Link>
      </FlexColumnSpaceBetweenForm>
      <Link to="/log-in">Already have an account?</Link>
    </FlexColumnSpaceBetween>
  );
};

export default CreateAccount;
