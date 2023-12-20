import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import fox from "../assets/img/fox.png";
import man from "../assets/img/man.png";
import moralis from "../assets/img/moralis.png";
import solidity from "../assets/img/solidity.png";
import ether from "../assets/img/ether.png";
import hardhat from "../assets/img/hardhat.png";

function Future() {
  return (
    <div className="future">
      <div>
        <h2>The Future of Web3 NoCode</h2>
        <h4>
          Web3Makr allows you to incorporate top ranked blockchain platforms
          into your work through the drag and drop feature.
        </h4>
        <div className="mt-5">
          <Container>
            <Row>
              <Col sm={12} md={12} lg={4} style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "5rem", fontSize: "2.5rem" }}>
                  Multichain
                </h3>
                <h3 style={{ marginBottom: "5rem", fontSize: "2.5rem" }}>
                  Dashboard
                </h3>
                <h3 style={{ marginBottom: "5rem", fontSize: "2.5rem" }}>
                  Tool
                </h3>
              </Col>
              <Col sm={12} md={12} lg={8}>
                <div className="images" style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={fox}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Wallets Support</p>
                  </div>
                  <div>
                    <Image
                      src={man}
                      width={"120px"}
                      roundedCircle
                      style={{ backgroundColor: "white", marginRight: "3rem" }}
                    />
                    <p>NFT Search</p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={moralis}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Moralis Integration</p>
                  </div>
                  <div>
                    <Image
                      src={solidity}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Solidity</p>
                  </div>
                </div>
                <div className="images" style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={ether}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Ether.js</p>
                  </div>
                  <div>
                    <Image
                      src={hardhat}
                      width={"120px"}
                      roundedCircle
                      style={{ backgroundColor: "white", padding: "3px" }}
                    />
                    <p>Hardhat</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Future;
