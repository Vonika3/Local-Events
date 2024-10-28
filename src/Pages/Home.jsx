import React from "react";
// import react-router-dom
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
// imports components
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import RoomContainer from "../Components/RoomsContainer/RoomsContainer";

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Spot All Events"
          subtitle="Find Your Next Adventure Nearby"
        >
          <Link to="/events" className="btn-primary">
            Upcoming Events
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <RoomContainer />
    </>
  );
}

export default Home;
