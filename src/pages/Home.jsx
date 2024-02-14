import React from "react";
import Map from "../components/Map";

function Home() {
  return (
    <div className="Home">
      <div className="introduction">
        <h2>Welcome to My Destination!</h2>{" "}
        <p>
          Embark on a journey of exploration with us. Our website offers you the
          opportunity to discover both well-known and obscure places around your
          area. Whether you're seeking hidden gems or iconic landmarks, we're
          here to guide you on your adventure.
        </p>
      </div>
      <Map />
    </div>
  );
}

export default Home;
