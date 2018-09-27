import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          Chosen food every 5 days.
          Today on the table: Original Steinofen-pizza
          <button>Order Today's Meal</button>
          Check out our meal for tomorrow.
        </div>
        <div>Made with love</div>
      </div>
    );
  }
}

export default Home;