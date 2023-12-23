import React from "react";
import mockup from "../assets/img/Mockup.png";
import { Image } from "react-bootstrap";
import play from "../assets/img/Play 02.png";
import Modal from "react-bootstrap/Modal";
import video from "../assets/img/video.mp4";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <i>Web3Makr Trailer</i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video src={video} className="video" autoPlay="true"></video>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function HeroSection(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="hero-bg">
      <div className="herosection">
        <div>
          <h1>
            Web3Makr Redefining <br />
            How You Create
          </h1>
          <p>
            Unlock the blockchain potential to create <br /> Web3 Applications
          </p>{" "}
          <div>
            <Link onClick={() => setModalShow(true)} rel="noopener noreferrer">
              <Image src={play} style={{ marginTop: "1rem" }} />
            </Link>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={mockup} className="mockup" />
      </div>
    </div>
  );
}
