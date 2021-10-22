import React, { Component } from "react";


class AddBill extends Component{
    constructor(props){
        super(props)

        this.props.bill.id = this.props.bills.reduce((max, bill) => (bill.id > max ? bill.id : max),this.props.bills[0].id);
    }
    render(){
        return(
    <div>
      <center><h1>Add a bill</h1></center>
      <form>
        <label>
        Name:
            <input value={this.props.bill.Name} type="text" name="name" />
            </label>
            <label>
        Description:
            <input value={this.props.bill.Description} type="text" name="name" />
            </label>
            <label>
        Amount:
            <input value={this.props.bill.Amount} type="number" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
      
    </div>
  )}
};

export default AddBill