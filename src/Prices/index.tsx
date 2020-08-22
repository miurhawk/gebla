import * as React from "react";
import { Link } from "react-router-dom";
import { StyledTable, FlexCol, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";

// <caption><a>*Student, Retired, Unemployed, or MCC/MRCC member with proof</a></caption>

const Prices = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Prices");
  return (
    <StyledTable>
      <tbody>
      <tr><th>Gym Passes</th><th>Regular (€)</th><th>Concession* (€)</th></tr>
      <tr><td>1 Day</td><td>15</td><td>13</td></tr>
      <tr><td>10 Day Bundle</td><td>120</td><td>100</td></tr>
      <tr><td>1 Month</td><td>80</td><td>60</td></tr>
      <tr><td>3 Month</td><td>220</td><td>170</td></tr>
      <tr><td>6 Month</td><td>400</td><td>340</td></tr>
      <tr><th>Rentals</th><th>Price (€)</th></tr>
      <tr><td>Shoe</td><td>4</td></tr>
      <tr><td>Chalk</td><td>2</td></tr>
      <tr><td>Harness</td><td>5</td></tr>
      <tr><td>Helmet</td><td>2</td></tr>
      <tr><td>The Whole Shebang</td><td>10</td></tr>
      <tr><th>Service</th><th>Price Per Hour (€)</th></tr>
      <tr><td>Guide</td><td>50</td></tr>
      <tr><td>Coach</td><td>80</td></tr>
      <tr><td>Transport</td><td>10</td></tr>
      <tr><th>Course/Package</th><th>Price (€)</th></tr>
      <tr><td>Indoor Experience</td><td>60</td></tr>
      <tr><td>Outdoor Experience</td><td>60</td></tr>
      <tr><td>Experience Set</td><td>100</td></tr>
      <tr><td>Intro to Climbing</td><td>50</td></tr>
      <tr><td>Intro to Belaying</td><td>50</td></tr>
      <tr><td>Basics of Technique</td><td>50</td></tr>
      <tr><td>Beginners' Series</td><td>120</td></tr>
      <tr><td>Advanced Courses</td><td>100</td></tr>
      <tr><td><br /></td></tr>
      </tbody>
    </StyledTable>
  );
};

export default Prices;
