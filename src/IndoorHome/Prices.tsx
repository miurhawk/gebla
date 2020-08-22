import * as React from "react";
import { StyledTable, FlexRowFill, DetailRow, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";


const PricesDetail = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill>
    <a>
      <StyledTable>
        <tbody>
        <tr><th>Pass Duration</th><th>Regular (€)</th><th>Concession* (€)</th></tr>
        <tr><td>1 Day</td><td>15</td><td>13</td></tr>
        <tr><td>10 Day Bundle</td><td>120</td><td>100</td></tr>
        <tr><td>1 Month</td><td>80</td><td>60</td></tr>
        <tr><td>3 Month</td><td>220</td><td>170</td></tr>
        <tr><td>6 Month</td><td>400</td><td>340</td></tr>
        <tr><th>Item</th><th>Price (€)</th></tr>
        <tr><td>Shoe Rental</td><td>4</td></tr>
        <tr><td>Chalk Rental</td><td>2</td></tr>
        <tr><td> </td></tr>
        </tbody>
      </StyledTable>
      </a>
      <br />
      <br />
        <a>*Student, Retired, Unemployed, or MCC/MRCC member with proof</a>
        <a>See our full price list <a href="/prices">here</a></a>
        </FlexRowFill>
    </DetailRow>
  );
};

export default PricesDetail;
