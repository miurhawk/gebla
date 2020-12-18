import * as React from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import { StyledForm } from "../styles";
import { useState } from "react";
import ReactGA from "react-ga";


const BaseForm = (props: { setTitle: (v: string) => void, }) => {
  const { product } = useParams();
  ReactGA.event({
  category: "Open Form",
  action: "User opened the form for "+product,
});
  let endProduct: string;
  if (product) {
    var re = /_/gi;
    endProduct = product.replace(re, " ");
  } else {

    endProduct = "Climb Experience";
  }
  const today = new Date().toLocaleDateString("en-CA");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("morning");
  const [comment, setComment] = useState("");

  const [number, setNumber] = useState(1);
  let history = useHistory();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name + email + phone + date + time + endProduct);

    var text = "Good Day,\nThis is a confirmation that "+name+" has requested a "+endProduct+" booking for "+number+" people on "+date+" "+time+".\nContact details: "+phone+"\n\n\nAdditional comments:\n"+comment;
    let data = JSON.stringify({
      text: text,
      title: "New " +endProduct+" Booking Request",
      recipient: email,
      secret: "XmTpO1",
    });
    fetch("http://app.theoffwidth.com/system/mail", {
          method: "POST",
          body: data,
        }).then( (response) => {

          console.log(response.status);
          if (response.status === 204) {
            history.push('/success');
            return
          } else {
            alert("There was an error sending the email, please try again");
          }
        });
  }

  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  return (

    <StyledForm onSubmit={handleSubmit}>
      <h6 style={{color: `#EEEDF4`}}>{endProduct} Booking</h6>

      <label><h6>Full Name: </h6> <input type="text" required value={name} onChange={(e) => setName(e.target.value)} /></label>

      <label><h6>Email: </h6><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>

      <label><h6>Contact No. (w/ Country Code): </h6><input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} /></label>

      <label><h6>Preferred Date: </h6><input type="date" required min={today} value={date} onChange={(e) => setDate(e.target.value)} /></label>

      <label><h6>Preferred Time: </h6>
        <select required onChange={(e) => setTime(e.target.value)}>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
        </select>
      </label>
      <label><h6>Number in Party: </h6>
        <select required onChange={(e) => setNumber(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8+</option>
        </select>
      </label>
      <label><h6>Comments: </h6><input type="text" required value={comment} onChange={(e) => setComment(e.target.value)} /></label>

      <input class="input__submit" style={{backgroundColor: `#23E5BF`, height: `60px`, width: `200px`, border: `none`, alignSelf: `center`, fontFamily: `Montserrat`, fontSize: `16pt`}} type="submit" value="Submit" />
    </StyledForm>

  );
};
const Form = withRouter(BaseForm);

export default Form;
