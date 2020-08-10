import React, { Component } from 'react';
import queryString from 'query-string';
import "./style.css";
class Oauth extends Component {
    state = { 
        Processing: true,
        code: "",
        state: "",
     }
    componentDidMount(){
        
        let url = this.props.location.search;
        let params = queryString.parse(url);
        console.log(params);
        this.setState({ code: params.code, state: params.state })
        setTimeout(() => {
            this.setState({ Processing: false })
        }, 3000);
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className={ "centered" } >
                    <div style={{ padding: "30px" ,height: "55vh", justifyContent: "center", alignItems:"center", backgroundColor: "whitesmoke", borderRadius: "10px"}} >
                        <div style={{display: "flex" , justifyContent: "center", alignItems: "center"}} >
                            <span style={{color: "grey", fontSize: "20px"}} > Ace In Hole Account Connectivity </span>
                        </div>

                        <div style={{display: "flex" , justifyContent: "center", alignItems: "center"}} >
                            <h1 style={{ }} > Your Are connected Successfully! </h1>
                        </div>

                        <div style={{display: "flex" , justifyContent: "center", alignItems: "center"}} >
                            <h3 style={{ }} > Making Final Changes For You! </h3>
                            
                        </div>

                        <div style={{display: "flex" , justifyContent: "center", alignItems: "center",height: "4vh"}} >
                            <h3> Code: { this.state.code } </h3>
                        </div>
                        <div style={{display: "flex" , justifyContent: "center", alignItems: "center", height: "4vh"}} >
                            <h3> State: {this.state.state}  </h3>
                        </div>

                        

                    {
                        this.state.Processing ?
                        <div style={{ display: "flex" , justifyContent: "center", marginTop: "30px"}} >
                            <button className={ "pay-button" }  disabled={true} > Processing... </button>
                        </div>
                        :
                        <div style={{ display: "flex" , justifyContent: "center", marginTop: "30px"}} >
                            <button className={ "pay-button" } > Go Back </button>
                        </div>
                    }
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Oauth;