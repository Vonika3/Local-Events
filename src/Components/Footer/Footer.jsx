import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Near & Now| Upcoming Events</h2>
      <p>
        &copy; <span>{year}</span> EventSpot.com - All Rights Copyright  
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="/"
        >
          Vonika
        </a>
      </p>
    </footer>
  );
}
