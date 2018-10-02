import React from "react";

export default ({ toppings }) => {
  const availableSizes = [13, 20, 24];

  return (
    <div className="size_options">
      <section>
        <h4>* Choose pizza size in cm</h4>
        <select>
          { availableSizes.map(opt => <option value={opt}>opt</option>) }
        </select>
      </section>

      <section>
        <h4>* Choose pizza size in cm</h4>
        <select>
          { toppings.map(opt => <option value={opt}>opt</option>) }
        </select>
      </section>
    </div>
  );
}