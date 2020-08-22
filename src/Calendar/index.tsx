import * as React from "react";
import { Link } from "react-router-dom";
import { StyledCalendar, StyledWeek, StyledDay } from "../styles";

const Calendar = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Calendar");
  return (
    <StyledCalendar>
      <StyledWeek>
        <StyledDay>
          <a>1 Mon</a>
          <a href="/indoor-home">7am Yoga With Jen</a>
        </StyledDay>
        <StyledDay>
          <a>2 Tue</a>
        </StyledDay>
        <StyledDay>
          <a>3 Wed</a>
          <a href="/indoor-home">8pm - Bikers' Night</a>
        </StyledDay>
        <StyledDay>
          <a>4 Thu</a>
        </StyledDay>
        <StyledDay>
          <a>5 Fri</a>
        </StyledDay>
        <StyledDay>
          <a>6 Sat</a>
          <a href="/indoor-home">9am - 12pm Climb Experience</a>
        </StyledDay>
        <StyledDay>
          <a>7 Sun</a>
        </StyledDay>
      </StyledWeek>
      <StyledWeek>
        <StyledDay>
          <a>8 Mon</a>
          <a href="/indoor-home">7am Yoga With Jen</a>
        </StyledDay>
        <StyledDay>
          <a>9 Tue</a>
        </StyledDay>
        <StyledDay>
          <a>10 Wed</a>
        </StyledDay>
        <StyledDay>
          <a>11 Thu</a>
        </StyledDay>
        <StyledDay>
          <a>12 Fri</a>
        </StyledDay>
        <StyledDay>
          <a>13 Sat</a>
        </StyledDay>
        <StyledDay>
          <a>14 Sun</a>
          <a href="/indoor-home">6pm - Reel Rock</a>
        </StyledDay>
      </StyledWeek>
    </StyledCalendar>
  );
};

export default Calendar;
