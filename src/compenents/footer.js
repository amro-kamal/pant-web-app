import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className=" d-flex justify-content-center">
            <h2 className="text-center">
              {" "}
              <FontAwesomeIcon icon={faLeaf} /> PLANT
            </h2>
          </div>
          <div className=" d-flex justify-content-center">
            <p className="text-center">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              Agriculture Business, 2nd Block, USA
              <FontAwesomeIcon icon={faPhoneAlt} />
              +2499000000000
              <FontAwesomeIcon icon={faEnvelope} />
              Example@gmail.com
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
