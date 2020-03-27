import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartBar,
  faHome,
  faChartArea,
  faWrench,
  faExchangeAlt,
  faHandHoldingUsd
} from "@fortawesome/free-solid-svg-icons";

const CardItem = ({ img, icon, title, titleimg, txt }) => {
  return (
    <Card className="cardItem text-center">
      <Card.Body>
        <img src={img} />
        <FontAwesomeIcon
          // className="myicon exchangeIcon mx-auto"
          icon={icon}
        />
        <Card.Title>
          <img src={titleimg} />
          {title}
        </Card.Title>
        <Card.Text>{txt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
