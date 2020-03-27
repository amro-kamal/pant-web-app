import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "../styles/navBar.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="sticky-top mynavbar">
      <div className="container">
        <Navbar.Brand href="/">
          {/* <img src={logo} style={{ width: "200px", height: "50px" }} /> */}
          <FontAwesomeIcon
            icon={faLeaf}
            style={{
              fontSize: "40px",
              color: "#ebcd06",
              marginRight: "10px"
            }}
          />
          <span
            style={{ fontSize: "40px", fontWeight: "600", color: "#ffffff" }}
          >
            PlanT
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="mx-4">
              Home
            </Nav.Link>
            <Nav.Link href="/services" className="mx-4">
              Services
            </Nav.Link>
            <Nav.Link href="/about" className="mx-4">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="ml-4 mr-5">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
