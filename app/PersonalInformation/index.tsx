import * as React from "react";
import { FlexColumnSpaceBetween, FlexColumnSpaceBetweenForm } from "../styles";
import { Link } from "react-router-dom";

const { useState } = React;

const PersonalInformation = () => {
  const [name, setName] = useState(""); // todo: figure this ish out later

  return (
    <FlexColumnSpaceBetween>
      <h1>Create account</h1>
      <FlexColumnSpaceBetweenForm>
        <label>
          Date of birth
          <input type="text" name="dob" />
        </label>
        <label>
          Gender
          <input type="text" name="gender" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Country:
          <input type="text" name="country" />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <Link to="personal-information">Get started</Link>
      </FlexColumnSpaceBetweenForm>
      <Link to="/account">Already have an account?</Link>
    </FlexColumnSpaceBetween>
  );
};

export default PersonalInformation;
