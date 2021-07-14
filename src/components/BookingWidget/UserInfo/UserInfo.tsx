import * as React from "react"
import {useEffect, useState} from "react";
import {BASEURL} from "../app";
import {useCookies} from "react-cookie";
type UserProps = {
    id: number;
    verbose: boolean;
};


export interface Pass {
    Template: PassModel;
    Key: number;
}

export type PassModel = {
    key: number;
    type: number;
    entries: number;
    name: string;
    entry: boolean;
    events: string[];
}

const UserInfo = (props: UserProps) => {
    let [displayName, setDisplay] = useState(""+props.id);
    let [passes, setPasses] = useState<Pass[]>([]);
    let [listItems, setLI] = useState(passes.map((p) => <li>{p.Template.name}</li>));
    const [cookies, setCookie] = useCookies();



    useEffect(() => {

        if (cookies[""+props.id]) {

            setDisplay(cookies[""+props.id]);

            if (!props.verbose) {
                return
            }
            if (cookies["beta_passes:"+props.id]) {
                // then all is good, set the passes
                setPasses(cookies["beta_passes:"+props.id]);
                setLI(cookies["beta_passes:"+props.id].map((p) => <li key={p.Key}>{p.Template.name}</li>));
                return
            }
        }

        fetch(BASEURL+"/membership/"+props.id, {
            method: "GET",
            headers: {Authorization: cookies.beta_auth}
        }).then((response) => {

            if (response.status === 200) {
                response.json().then((body) => {
                    setDisplay("@"+body["climber"]["username"]);
                    setCookie(""+props.id, "@"+body["climber"]["username"]);

                    if (body["passes"]) {
                        setPasses(body["passes"]);
                        setCookie("beta_passes:"+props.id, body["passes"]);
                        setLI(passes.map((p) => <li key={p.Key}>{p.Template.name}</li>));
                    }

                    if (body["events_organzing"]) {
                        // setEvents(body["events_organzing"]);
                        setCookie("beta_events_org:"+props.id, body["events_organizing"]);
                        // setLI(passes.map((p) => <li key={p.Key}>{p.Template.name}</li>));
                    }
                    if (body["events_attending"]) {
                        // setEvents(body["events_organzing"]);
                        setCookie("beta_events_att:"+props.id, body["events_attending"]);
                        // setLI(passes.map((p) => <li key={p.Key}>{p.Template.name}</li>));
                    }

                    return
                });
            } else {
                alert("There was an error fetching the data, please try again");
            }
        });
    }, [props.id]);

    if (props.verbose) {
        return (
            <>
                <p>{displayName}</p>
                {listItems.length != 0 && <h4>Passes</h4>}
                {listItems.length != 0 &&
                <ul>
                    {listItems}
                </ul>}

            </>
        )
    }
    return (
        <p>{displayName}</p>
    )
};



export default UserInfo;
