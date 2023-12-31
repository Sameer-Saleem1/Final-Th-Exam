import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import footerlogo from "../assets/img/footer-logo.png";
import { Link } from "react-router-dom";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import twitter from "../assets/img/twitter.png";

export default function Footer() {
  return (
    <div className="footer-bg">
      <div>
        <h1 className="footer">
          <div>
            <Image src={footerlogo} width={"60px"} />
            <div className="inner-footer">
              <Link className="Navbar-element " to="/HeroSection">
                <h4>Web3Makr</h4>
              </Link>
              <Link className="Navbar-element " to="/Contact">
                <h4>White Paper</h4>
              </Link>
              <Link className="Navbar-element " to="/Contact">
                <h4>Services</h4>
              </Link>
              <Link className="Navbar-element" to="/Contact">
                <h4>Tool</h4>
              </Link>
              <Link className="Navbar-element " to="/Contact">
                <h4>Contact us</h4>
              </Link>
            </div>
          </div>
        </h1>
      </div>
      <div>
        <Container className="lower-inner-footer">
          <Row>
            <Col lg={6} sm={6} md={6} style={{ textAlign: "center" }}>
              <p className="copyright">Copyright 2022 © Web3makr</p>
            </Col>
            <Col lg={6} sm={6} md={6} className="footer-social">
              <div>
                <Link to={"/"}>
                  <Image
                    src={instagram}
                    width={"30px"}
                    style={{ marginLeft: "5px" }}
                  />
                </Link>
                <Link to={"/"}>
                  <Image
                    src={twitter}
                    width={"30px"}
                    style={{ marginLeft: "5px" }}
                  />
                </Link>
                <Link to={"/"}>
                  <Image
                    src={facebook}
                    width={"30px"}
                    style={{ marginLeft: "5px" }}
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
