import React, { Component } from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import MainCheckOut from '../MainCheckOut';
import OAuth from "../oauth";
import history from "../history";
class MyRoutes extends Component {
  state = { 
      price: 15 
   }
 
  render() { 
    return ( 
      <React.Fragment>
        <Router history={history} >
           {/* <Switch> */}
            <Route exact path="/connect/oauth"  component={OAuth} />
            <Route exact path="/" component={MainCheckOut} />
           
            {/* </Switch> */}
          </Router> 
      </React.Fragment>
            // path="/:amount?/:connectedAccountId?" component={MainCheckOut} />

            // /* <Route exact path="/:email?/:amount?/:orderId?" component={MainCheckOut} /> */}
        
     );
  }
}
 
export default MyRoutes;
// function App() {
//   return (
    
//   );
// }

// export default App;
