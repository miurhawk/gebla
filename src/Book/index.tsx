import * as React from "react";
// import BETABookingWidget from "@chalk-tech/booking-widget";
import {DetailRow, FlexCol} from "../styles";
import BETABookingWidget from "../components/BookingWidget/app";


const Book = () => {

  return (
      <DetailRow >
          <div style={{margin: `auto`, width: `500px`, padding: `30px`}}>

              <BETABookingWidget gymID={10286} />

          </div>

          <a style={{padding: `30px`}}>
              <h2>Join the <span style={{color: `#23E5BF`}}>fun</span></h2>
              <p>Check out our upcoming events and manage your bookings and passes here.</p>
              <p>Multiple passes can be purchased together and assigned to friends and family before use. We'll send you a reminder before your event with meeting location and instructions.</p>
              <p>If your plans change, please deregister at least 24 hours before an outdoor class.</p>
              <p>For help using the booking system please contact us at <a href={"mailto:info@gebla.mt"}>info@gebla.mt</a></p>
          </a>

      </DetailRow>


  );
};

export default Book;
