import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: "🎵",
        title: "Musical Acts",
        info:
          "Local events feature musical acts that showcase community talent and foster connections among attendees, enriching the cultural landscape.",
      },
      {
        icon: "☕",
        title: "Snack Booths",
        info:
          "A snacks booth at local events provides a variety of tasty treats, enhancing the experience while supporting local vendors.",
      },
      {
        icon: "📷",
        title: "Art Exhibitions.",
        info:
          "An art exhibition at local events showcases local artists and enriches the community's cultural experience.",
      },
      {
        icon: "🎮",
        title: "Fun Activities",
        info:
          "Fun activities at local events engage attendees and strengthen community bonds through entertainment and games.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Activities Involved" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
