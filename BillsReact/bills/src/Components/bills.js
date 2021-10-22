import React from 'react'

const Bills = ({ bills }) => {
  return (
    <div>
      <center><h1>Upcoming Bills</h1></center>
      {bills.map((bill) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{bill.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{bill.description}</h6>
            <p class="card-text">{bill.amount}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Bills