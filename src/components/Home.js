import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          Chosen food every 5 days.
          Today on the table: Original Steinofen-pizza
          <Link to="/order">Order Today's Meal</Link>
          Check out our meal for tomorrow.
        </div>
        <div>Made with love</div>
      </div>
    );
  }
}

export default Home;