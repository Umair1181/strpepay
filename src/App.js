import React, { Component } from 'react';
import MyRoutes from "./components/router";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm'
const stripePromise = loadStripe("pk_test_2Qxo3JNFdwPvQ0UbamibC4g200HHZIUZXs");

class App extends Component {
  state={
    price: 15
  }
 
  render() { 
    return ( 
      <React.Fragment>
        <MyRoutes />

            {/* <Elements stripe={stripePromise} >
                 <CheckoutForm price={this.state.price} />
             </Elements> */}
      </React.Fragment>
     );
  }
}
 
export default App;
// function App() {
//   return (
    
//   );
// }

// export default App;
