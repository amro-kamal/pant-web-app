import React, { Component } from "react";
import { Row } from "react-bootstrap";
const HearderTilte = ({ txt }) => {
  return (
    <div className="HT">
      <Row className="d-flex justify-content-center">
        <h2
          className="text-center"
          style={{
            color: "rgb(84, 151, 107)",
            fontWeight: "500",
            letterSpacing: "2px"
          }}
        >
          {txt}
        </h2>
      </Row>
    </div>
  );
};

export default HearderTilte;
