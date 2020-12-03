import * as React from "react";
import { useState } from "react";
import { TC, BookButton, DetailRow } from "../styles";

function SetTermsAcceptedCookie(): void {
    const date = new Date();
    // Set it expire in 21 days
    date.setTime(date.getTime() + 21 * 24 * 60 * 60 * 1000);
    document.cookie =
    "geblatcaccept=true; expires=" +
    date.toUTCString() +
    "; path=/";
}

export function GetTCAccepted(): boolean {
    const value = "; " + document.cookie;
    const parts = value.split("; " + "geblatcaccept=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift() === "true";
    }
    return false
}

const Terms = () => {
    const [accepted, setAccepted] = useState(GetTCAccepted());
    console.log("accepted"+accepted);
    console.log("accepted"+GetTCAccepted());

    function Accept(): void {
        setAccepted(true)
        SetTermsAcceptedCookie()
    }
    return (

    <TC show={!accepted}>
        <a>
            We use cookies.
        </a>
        <DetailRow>
            <BookButton onClick={() => window.location.href='/privacy#TC'}>More Info</BookButton>
            <BookButton style={{backgroundColor: `#FF8DEA`}} onClick={Accept}>OK</BookButton>
        </DetailRow>
    </TC>

  );
};

export default Terms;
