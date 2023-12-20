import React from "react";
import mockup from "../assets/img/Mockup.png";
import { Image } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div div style={{ backgroundColor: "#5a3f75" }}>
      <div className="herosection">
        <div>
          <h1>
            Web3Makr Redefining <br />
            How You Create
          </h1>
          <p>
            Unlock the blockchain potential to create <br /> Web3 Applications
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={mockup} width={"900px"} />
      </div>
    </div>
  );
}
