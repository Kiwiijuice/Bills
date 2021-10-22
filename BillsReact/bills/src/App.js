import React, { Component } from "react";
import AddBill from "./Components/AddBill";
import Bills from './Components/bills';

class App extends Component {
  state = {
    bills: [],
    bill: {id: 0, name: '', description: '', Amount: 0}
  };
  maxid = 0;

  constructor(props){
    super(props);    
    this.state.bill = {id: this.maxId, name: '', description: '', Amount: 0};
  }
  

  componentDidMount() {
    fetch("https://localhost:44340/api/bills", { method: 'GET', 
    headers: 
    { 
      Accept: 'application/json',  
      mode: 'cors',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
    }
    }).then((res) => res.json())
      .then((data) => {
        this.setState({ bills: data });
      })
      .catch(console.log);
  };

  

  render() {
    return (
      <div>
      <Bills bills={this.state.bills} />
      </div>
    );
  }
}

export default App;
