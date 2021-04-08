import * as React from "react";
import { withRouter } from "react-router-dom";
import {DetailCol, FlexCol, FlexRowFill, StyledForm, StyledTable} from "../styles";
import { useState } from "react";
import ReactGA from "react-ga";

type Climber = {
    key: number;
    first: string;
    last: string;
    email: string;
    phone: string;
    signedWaiver: string;
}
const BOBase = () => {
  ReactGA.event({
  category: "Open Backoffice",
  action: "User opened the backoffice",
})
    let emptyClimberList: Climber[] = [];
    const [pwd, setPwd] = useState("");
    const [climberList, setClimberList] = useState(emptyClimberList);
    const [listItems, setListItems] = useState(climberList.map((c) =>
        <tr key={c.key}>
            <td>{c.first}</td>
            <td>{c.last}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>{c.signedWaiver}</td>
        </tr>
    ));
    const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch("https://server.chalk-technologies.com/gym/climbers?key="+pwd, {
          method: "GET",
        // headers: {Authentication: pwd}
        }).then( (response) => {

            console.log(response.status);
            if (response.status === 200) {
                response.json().then((body) => {
                    for (let climber in body) {
                        let ctype: Climber = {
                            key: body[climber]["key"],
                            first: body[climber]["first_name"],
                            last: body[climber]["last_name"],
                            email: body[climber]["email"],
                            phone: body[climber]["phone"],
                            signedWaiver: body[climber]["Waivers"] != null ? "yes": "no"
                        }
                        climberList.push(ctype);
                        setClimberList(climberList);
                        setListItems(climberList.map((c) =>
                            <tr key={c.key}>
                                <td>{c.first}</td>
                                <td>{c.last}</td>
                                <td>{c.email}</td>
                                <td>{c.phone}</td>
                                <td>{c.signedWaiver}</td>
                            </tr>
                        ));
                    }
                    return
                });

            } else {
              alert("There was an error logging in, please try again");
            }
        });
  }

  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  return (
    <DetailCol>
        <FlexRowFill>
    <StyledForm onSubmit={handleSubmit}>
      <h6 style={{color: `#EEEDF4`}}>Gebla backoffice</h6>
      <label><h6>Password: </h6> <input type="password" required value={pwd} onChange={(e) => setPwd(e.target.value)} /></label>
      <input className="input__submit" style={{backgroundColor: `#23E5BF`, height: `60px`, width: `200px`, border: `none`, alignSelf: `center`, fontFamily: `Montserrat`, fontSize: `16pt`}} type="submit" value="Submit" />
    </StyledForm>
    <StyledTable>
        <tbody>
        <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Signed Waiver?</th>
        </tr>
            {listItems}
        </tbody>
    </StyledTable>
        </FlexRowFill>
    </DetailCol>
  );
};
const BO = withRouter(BOBase);

export default BO;
