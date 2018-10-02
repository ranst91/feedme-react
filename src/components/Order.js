import React from "react";

import Pizza from './steps/Pizza';

export default class Order {
  get step() {
    return 'Pizza';
  }

  render() {
    const Step = this.step;
    return (
      <div>This is the order page</div>
    );
  }
}