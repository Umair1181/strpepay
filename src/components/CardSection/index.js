/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import './CardSectionStyles.css'

const CARD_ELEMENT_OPTIONS = {
  style: {
    
    base: {
      color: "#32325d",      
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "20px",
      "::placeholder": {
        color: "#aab7c4",
      },
    
    },
    invalid: {
    
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <div style={{width: "100vh", height: "20vh", alignItems: "center", justifyContent:"center"}} >
        <div style={{ display: "flex" , justifyContent: "center", height: "5vh"}} >
          <span style={{fontSize: "20px", color: "grey"}} >Fill Card Details To Proceed </span>  
        </div>
        <div style={{ display: "flex" ,alignContent: "center", width: "100vh", height: "5vh",justifyContent: "center"}} >
          <div style={{ display: "flex" ,alignContent: "center", width: "90vh", justifyContent: "center"}} >
            <CardElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>
    </div>
  );
};

export default CardSection;
