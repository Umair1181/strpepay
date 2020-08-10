import React,{Component} from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';

import CardSection from '../CardSection';
import axios from "axios";
import './chatForm.css';
const logo = require('../../images/LoginScreenLogo.png');
class CheckoutForm extends Component {
   state = {
    processing: false
   }
  // handleSubmit = async (event) => {
  //   this.setState({ processing: true });
  //   console.log( "check# 1" );
  //   // We don't want to let default form submission happen here,
  //   // which would refresh the page.
  //   event.preventDefault();

  //   const {stripe, elements, price } = this.props
  //   console.log( "check# 2");

  //   if (!stripe || !elements || !price) {
  //       console.log( "check # 2 'error" )
  //     // Stripe.js has not yet loaded.
  //     // Make  sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   axios.post( "https://stripserver.herokuapp.com/api/create-intent", {
  //       amount: price * 100
  //   } )
  //   .then( async res => {
  //       console.log( "check# 3" );
  //       console.log( res.data.client_secret ) ;
  //       console.log( "res.data.client_secret" );
  //       this.setState({ processing: false });
  //       const cardElement = elements.getElement(CardElement);
  //       const paymentMethodRequest = await stripe.createPaymentMethod({
  //           type: "card",
  //           card: cardElement,
         
  //       })
  //       console.log( "check# 4" );
  //       const confirmCardPayment = await stripe.confirmCardPayment(res.data.client_secret, {
  //           payment_method : paymentMethodRequest.paymentMethod.id
  //       })
  //       console.log( "check# 5" );

  //       console.log( confirmCardPayment );
  //       this.setState({ processing: false });
  //       console.log( "check# 6" );
  //       // const result = await stripe.confirmCardPayment('sk_test_mShogpf5eieu4fSmzYzmyrCD00nQhZ40n3', {
  //       //   payment_method: {
  //       //     card: elements.getElement(CardElement),
  //       //     billing_details: {
  //       //       name: 'Jenny Rosen',
  //       //     },
            
  //       //   }
  //       // });

  //       // if (result.error) {
  //       //   // Show error to your customer (e.g., insufficient funds)
  //       //   console.log(result.error.message);
  //       // } else {
  //       //   // The payment has been processed!
  //       //   if (result.paymentIntent.status === 'succeeded') {
  //       //       console.log( result.paymentIntent );
  //       //       console.log( "Payemnt is Succedded" );
  //       //     // Show a success message to your customer
  //       //     // There's a risk of the customer closing the window before callback
  //       //     // execution. Set up a webhook or plugin to listen for the
  //       //     // payment_intent.succeeded event that handles any business critical
  //       //     // post-payment actions.
  //       //   }
  //       // }

  //   }).catch( err => {
  //       console.log( err );
  //       console.log( "error" );
  //   })

    
  // };

  render() {
    return (
      //  <div>
      //     Hello WORLD
      //   </div>
      <div >
        <form>
          <button>Pay Now </button>
        </form>
      </div>
      //     <div className="centered">
      //        <div style={{ display: "flex" , justifyContent: "center"}} >
      //           <button className={ "pay-button" }  disabled={!this.props.stripe} >Pay Now </button>
      //         </div>
                            
      //          <div style={{ width: "100vh",height: "80vh" ,display: "flex" , justifyContent: "center", alignItems:"center", backgroundColor: "whitesmoke", borderRadius: "10px"}} >
                 
      //               <form onSubmit={this.handleSubmit}>
      //                   <div style={{ display: "flex" , justifyContent: "center"}} >
                            
      //                       <img style={{height: "150px", width: "150px"}}  src={logo} alt="Smiley face"/>
                          
      //                   </div>
      //                   {
      //                       this.state.processing ?
      //                       <div style={{ display: "flex" , justifyContent: "center"}} >

      //                       <button disabled={true} className={ "pay-button" } > Processing... </button>
      //                       </div>
                            
      //                       :
      //                       <div style={{ display: "flex" , justifyContent: "center"}} >
      //                           <button className={ "pay-button" }  disabled={!this.props.stripe} >Pay Now </button>
      //                       </div>
                            
      //                   }
      //               </form>
      //       </div>    
      //  </div>
    
     );
  }
}

export default function InjectedCheckoutForm( props ) {
  return (
    <ElementsConsumer>
      {({stripe, elements }) => (
       
        <CheckoutForm stripe={stripe} elements={elements} price={props.price} />
      )}
    </ElementsConsumer>
  );
}

                        {/* <CardSection /> */}

