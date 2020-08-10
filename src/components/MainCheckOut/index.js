import React, { Component } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_2Qxo3JNFdwPvQ0UbamibC4g200HHZIUZXs");
class MainCheckOut extends Component {
    state = { 
        price: 15,
        connectedAccountId: ""
     }
    componentDidMount(){
        // this.setState({ price:this.props.match.params.amount, connectedAccountId:this.props.match.params.connectedAccountId })
        // console.log(this.props.match.params)
    }
    render() { 
        return ( 
            <Elements stripe={stripePromise} >
                <CheckoutForm price={this.state.price} />
            </Elements>
         );
    }
}
 
export default MainCheckOut;