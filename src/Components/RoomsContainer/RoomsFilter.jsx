import React, { useContext } from "react";
import { RoomContext } from "../../Context/Context";
import Title from "../Title/Title";

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const { handleChange, price, minPrice, maxPrice } = context;

  return (
    <section className="filter-container">
      <Title title="All Upcoming Events" />

      <form className="filter-form">
        {/* Room price filter */}
        <div className="form-group">
          <label htmlFor="price">Ticket price <span>&#8377;</span>{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
}
