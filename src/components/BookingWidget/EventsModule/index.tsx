import * as React from "react";
import {
    DetailCol, StyledTable, SmallButton
} from "../styles";
import {useEffect, useState} from "react";
import {BASEURL} from "../app";
import UserInfo from "../UserInfo/UserInfo";
import {useCookies} from "react-cookie";
// @ts-ignore
import moment from "moment";

export interface Climber {
    key: number;
    name: string;
    username: string;
}


export interface EventTemplate {
    key: number;
    gym: number;
    name: string;
    duration: number;
    max_capacity: number;
}
export interface Event {
    key: number;
    organizer: number;
    organizer_obj: Climber;
    start_time: string;
    cancelled: boolean;
    template: EventTemplate;
}


type EventModuleProps = {
    gymID: number;
};


const EventsModule = (props: EventModuleProps) => {
    const emptyNumList: number[] = [];
    const [cookies, setCookie] = useCookies();


    const [eventsAtt, setEventsAttending] = useState<Event[]>([]);

    const isUserAttending = (e: number) => {
        for (let i in eventsAtt) {
            if (eventsAtt[i].key == e) {
                return true
            }
        }
        return false
    }
    useEffect(() => {
        if (!cookies.beta_user) {
            return
        }
        if (cookies["beta_events_att:"+cookies.beta_user]) {
            // then all is good, set the passes
            setEventsAttending(cookies["beta_events_att:"+cookies.beta_user]);
            return
        } else {
            // then we fetch the climber data to populate the field
            fetch(BASEURL+"/membership/"+cookies.beta_user, {
                method: "GET",
                headers: {Authorization: cookies.beta_auth}
            }).then((response) => {
                // todo: we can abstract this bc it's also used by userinfo
                if (response.status === 200) {
                    response.json().then((body) => {
                        setCookie("" + cookies.beta_user, "@" + body["climber"]["username"]);

                        if (body["passes"]) {
                            setCookie("beta_passes:" + cookies.beta_user, body["passes"]);
                        }
                        //
                        // if (body["events_organzing"]) {
                        //     // setEvents(body["events_organzing"]);
                        //     setCookie("beta_events_org:" + props.id, body["events_organizing"]);
                        //     // setLI(passes.map((p) => <li key={p.Key}>{p.Template.name}</li>));
                        // }
                        if (body["events_attending"]) {
                            // setEvents(body["events_organzing"]);
                            setCookie("beta_events_att:" + cookies.beta_user, body["events_attending"]);
                            setEventsAttending(cookies["beta_events_att:"+cookies.beta_user]);
                        }

                        return
                    });
                } else {
                    alert("There was an error fetching the data, please try again");
                }
            });
        }
    }, [])


    const [listItems, setListItems] = useState(emptyNumList.map((c) =>
        <p />
    ));

    useEffect(() => {
        fetch(BASEURL+"/gym/"+props.gymID, {
            method: "GET",
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((body) => {

                    if (body.events) {
                        setListItems(body.events.map((e) =>
                            <EventInfo userid={cookies.beta_user} key={e.key} event={e} isUserAttending={isUserAttending(e.key)} />
                        ));
                    }

                    return
                });
            } else {
                alert("There was an error fetching the data, please try again");
            }
        });
    }, [eventsAtt]);




    return (
    <DetailCol>
            <StyledTable>
                <tbody>
                <tr>
                    <th>Event</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Organizer</th>
                    <th>Book</th>
                </tr>
                {listItems}
                </tbody>
            </StyledTable>

    </DetailCol>

  );
};

export default EventsModule;



type EventProps = {
    event: Event;
    isUserAttending: boolean;
    userid: number;
};




const EventInfo = (props: EventProps) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const book = () => {
        fetch(BASEURL+"/event/enroll/"+props.event.key, {
            method: "PUT",
            headers: {"Authorization": cookies.beta_auth},
        }).then( (response) => {

            if (response.status === 200) {
                alert("success!");
                // delete the cookie for events
                removeCookie("beta_events_att:"+props.userid);
                window.location.reload();
            } else {
                alert("There was an error confirming your enrollment. please try again or contact support@chalk-technologies.com");
            }
        });
    };
    const unbook = () => {
        fetch(BASEURL+"/event/unenroll/"+props.event.key, {
            method: "PUT",
            headers: {"Authorization": cookies.beta_auth},
        }).then( (response) => {

            if (response.status === 204) {
                alert("success!");
                removeCookie("beta_events_att:"+props.userid);
                window.location.reload();
            } else {
                alert("There was an error confirming your unenrollment. please try again or contact support@chalk-technologies.com");
            }
        });
    };

    return (
        <tr>
            <td>{props.event.template.name}</td>
            <td>{moment(props.event.start_time).format("DD/MM")}</td>
            <td>{moment(props.event.start_time).format("HH:mm")}</td>
            <td>{<UserInfo id={props.event.organizer} verbose={false} />}</td>
            <td>
                {!props.isUserAttending &&
                <SmallButton onClick={book}>
                    <h5>+</h5>
                </SmallButton>}
                {props.isUserAttending &&
                <SmallButton onClick={unbook}>
                    <h5>-</h5>
                </SmallButton>}
            </td>
        </tr>
    )
};
