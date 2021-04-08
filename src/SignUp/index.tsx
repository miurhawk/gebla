import * as React from "react";
import {  withRouter } from "react-router-dom";
import { StyledForm } from "../styles";
import { useState } from "react";
import ReactGA from "react-ga";


const SignUpBase = () => {
  ReactGA.event({
  category: "Open Form",
  action: "User opened the waiver form",
})
  const today = new Date().toLocaleDateString("en-CA");

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bday, setBday] = useState(today);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("redirecting you to the waiver");

    let data = JSON.stringify({
      first_name: first,
      last_name: last,
      email: email,
      phone: phone,
      birthdate: bday,
        address: "123 Main St."
    });
    fetch("https://server.chalk-technologies.com/membership/gebla", {
          method: "POST",
          body: data,
        }).then( (response) => {

          console.log(response.status);
          if (response.status === 200) {
              response.json().then((body) => {
                  let signURL = body["signing_url"];
                  console.log(body);
                  window.location = signURL;
                  return // (<iframe src={signURL}></iframe>)
              });

          } else {
            alert("There was an error registering you, please try again or contact info@gebla.mt");
          }
        });
  }

  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  return (

    <StyledForm onSubmit={handleSubmit}>
      <h6 style={{color: `#EEEDF4`}}>Register and Sign the Waiver</h6>
      <a style={{color: `#EEEDF4`}}>Upon clicking submit, you will receive a link to validate your email and this page will redirect to the waiver signing page.</a>

      <label><h6>First Name: </h6> <input type="text" required value={first} onChange={(e) => setFirst(e.target.value)} /></label>
      <label><h6>Last Name: </h6> <input type="text" required value={last} onChange={(e) => setLast(e.target.value)} /></label>

      <label><h6>Email: </h6><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>

      <label><h6>Contact No. (w/ Country Code): </h6><input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} /></label>

      <label><h6>Birthdate: </h6><input type="date" required value={bday} onChange={(e) => setBday(e.target.value)} /></label>

      <input className="input__submit" style={{backgroundColor: `#23E5BF`, height: `60px`, width: `200px`, border: `none`, alignSelf: `center`, fontFamily: `Montserrat`, fontSize: `16pt`}} type="submit" value="Submit" />
    </StyledForm>

  );
};
const SignUp = withRouter(SignUpBase);

export default SignUp;
