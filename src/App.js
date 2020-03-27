import React, { Component } from "react";
import bg from "./images/background.jpg";
import img1 from "./images/img1.jpg";

import Footer from "./compenents/footer";
import ClassificationDiv from "./compenents/classificationdiv";
import WebClasificationDiv from "./compenents/webClassificationDiv";
import play from "./images/play.png";

// import { BrowserRouter as BR, Route, Switch } from "react-router-dom";
import MyNavBar from "./compenents/navBar.";
import { Carousel, Row, Col, Button, Card } from "react-bootstrap";
import CardItem from "./compenents/Card";
import HearderTilte from "./compenents/headerTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingUsd,
  faAllergies,
  faQuestionCircle,
  faLeaf,
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      showClassifier: false
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:3001/")
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  openPicker = () => {
    console.log("openPicker");
    document.getElementById("file-input").click();
  };
  goToClassifier = () => {
    this.setState({ showClassifier: true });
  };
  // showPicked = e => {
  //   console.log("showPicked");
  //   console.log("file uploaded", e.target.files[0]);

  //   // document.getElementById("upload-label").innerHTML = e.target.files[0].name;
  //   var reader = new FileReader();
  //   reader.onload = e => {
  //     document.getElementById("image-picked").src = e.target.result;
  //     document.getElementById("image-picked").className = "";
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  // analyze = () => {
  //   console.log("analyze");

  //   var uploadedFiles = document.getElementById("file-input").files;

  //   if (uploadedFiles.length !== 1) alert("Please select a file to analyze!");
  //   else {
  //     document.getElementById("analyze-button").innerHTML = "Analyzing...";

  //     console.log("uploadFiles", uploadedFiles[0]);

  //     var formdata = new FormData();
  //     let imagefile = uploadedFiles[0];
  //     formdata.append("imageData", imagefile);

  //     for (var p of formdata) {
  //       console.log("formdata element ", p);
  //     }

  //     // var loc = window.location;
  //     fetch("http://localhost:4000/api/classify", {
  //       method: "post",
  //       // headers: { "Content-Type": "application/json" },
  //       body: formdata // JSON.stringify(formdata)
  //     })
  //       .then(res => res.json())
  //       .then(data => console.log(data));
  //   }
  // };

  //////////////////////////////////////////////////

  // function analyze() {
  //   var uploadFiles = el("file-input").files;
  //   if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  //   el("analyze-button").innerHTML = "Analyzing...";
  //   var xhr = new XMLHttpRequest();
  //   var loc = window.location;
  //   xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
  //     true);
  //   xhr.onerror = function() {
  //     alert(xhr.responseText);
  //   };
  //   xhr.onload = function(e) {
  //     if (this.readyState === 4) {
  //       var response = JSON.parse(e.target.responseText);
  //       el("result-label").innerHTML = `Result = ${response["result"]}`;
  //     }
  //     el("analyze-button").innerHTML = "Analyze";
  //   };

  //   var fileData = new FormData();
  //   fileData.append("file", uploadFiles[0]);
  //   xhr.send(fileData);
  // }

  render() {
    return (
      <div>
        <div className="main">
          <MyNavBar />
          <div>
            <div className="center">
              <div className="title">
                Wellcome To <span>Plant</span>
              </div>
              <div className="container">
                <Carousel indicators={false} controls={false} interval={2500}>
                  <Carousel.Item>
                    <h1>Your Solution For Diseases Problems</h1>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1>Low Cost Disease Detection And Treatment</h1>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1>Easy-To-Use Products</h1>
                  </Carousel.Item>
                </Carousel>
                <Button>ENROLL NOW</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="solution">
            <div className="container">
              <div className="d-flex justify-content-center">
                <h2 className="text-center">
                  Your Best Solution For Plants Diseases
                </h2>
              </div>
              <div className="d-flex justify-content-center">
                <p className="text-center">
                  {" "}
                  Tempor Ut enim ad minim quis nostrud exerci sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua nostrud
                  exerci sed nostrud exerci ipsum dolor ut.
                </p>
              </div>

              {this.state.showClassifier ? (
                <WebClasificationDiv
                  openPicker={this.openPicker}
                  analyze={this.analyze}
                />
              ) : (
                <ClassificationDiv goToClassifier={this.goToClassifier} />
              )}

              {/* {this.state.showClassifier ? (
                
              ) : (
                <classificationDiv />
              )} */}
            </div>

            {/* <div className="container">
              <div className="content d-flex justify-content-center">
                <div className="no-display">
                  <input
                    id="file-input"
                    className="no-display"
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={this.showPicked}
                  />
                </div>
                <button
                  id="btn"
                  className="choose-file-button"
                  type="button"
                  onClick={this.openPicker}
                >
                  Select Image
                </button>
                <div className="upload-label">
                  <label id="upload-label">No file chosen</label>
                </div>
                <div>
                  <img
                    id="image-picked"
                    className="no-display"
                    alt="Chosen Image"
                    height={200}
                  />
                </div>
                <div className="analyze">
                  <button
                    id="analyze-button"
                    className="analyze-button"
                    type="button"
                    onClick={this.analyze}
                  >
                    Analyze
                  </button>
                </div>
                <div className="result-label">
                  <label id="result-label" />
                </div>
              </div>
            </div> */}
          </div>

          <div className="why ">
            <div className="d-flex justify-content-center">
              <h2 className="text-center">Why To Choose Us</h2>
            </div>

            <div className="d-flex justify-content-center"></div>
            <div className="container">
              {/* <HeaderTile txt="Services" /> */}
            </div>
            <div className="cards">
              <div className="container">
                <Row className="d-flex justify-content-center">
                  <Col xs={12} sm={6} lg className="text-center">
                    <CardItem
                      icon={faHandHoldingUsd}
                      title="Low Cost"
                      txt="package from 5 contributors and audited 905423 packages in 48.55s and audited 905423 packages in 48.55s"
                    />
                  </Col>
                  <Col xs={12} sm={6} lg className="Free Shuttle">
                    <CardItem
                      icon={faAllergies}
                      title="Easy To Use"
                      txt="package from 5 contributors and audited 905423 packages in 48.55s and audited 905423 packages in 48.55s"
                    />
                  </Col>
                  <Col xs={12} sm={6} lg className="text-center">
                    <CardItem
                      icon={faQuestionCircle}
                      title="Support"
                      txt="package from 5 contributors and audited 905423 packages in 48.55s and audited 905423 packages in 48.55s"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          <div className="values">
            <div className="container">
              <div className="d-flex justify-content-center">
                <h2 className="text-center"> Our Core Values</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src={img1} />
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center">
                    <h1>
                      IMPROVING AGRICULTURE, IMPROVING LIVES, CULTIVATING NEW
                      CROPS TO MAKE FARMERS INCREASE PROFIT.
                    </h1>
                  </div>
                  <p>
                    Integer sit amet mattis quam, sit amet ultricies velit.
                    Praesent ullam corper dui turpis dolor sit amet quam. Nulla
                    commodo gravida porttitor. Aenean posuere lacus quis leo
                    imperdiet laoreet. Proin vulputate semper odio quam. Nulla
                    commodo gravida porttitor. Aenean posuere lacus quis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="best">
            <div className="container">
              <div className=" d-flex justify-content-center">
                <h2 className="text-center">
                  The Best Time To <span>Plant</span> The Tree Is Now.
                </h2>
              </div>
              <div className=" d-flex justify-content-center">
                <p className="text-center">
                  Sed ut perspiciatis unde omnis natus error dolor volup tatem
                  ed accus antium dolor emque laudantium, totam rem aperiam,
                  eaqu ipsa quae ab illo quasi architi ecto beatae vitae dicta
                  sunt dolor ipsum.
                </p>
              </div>
              <div className=" d-flex justify-content-center">
                <Button>Our Services</Button>
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>
          <Footer />
          {/* 
          <div className="content">
            <div className="no-display">
              <input
                id="file-input"
                className="no-display"
                type="file"
                name="file"
                accept="image/*"
                onChange={this.showPicked}
              />
            </div>
            <button
              id="btn"
              className="choose-file-button"
              type="button"
              onClick={this.openPicker}
            >
              Select Image
            </button>
            <div className="upload-label">
              <label id="upload-label">No file chosen</label>
            </div>
            <div>
              <img
                id="image-picked"
                className="no-display"
                alt="Chosen Image"
                height={200}
              />
            </div>
            <div className="analyze">
              <button
                id="analyze-button"
                className="analyze-button"
                type="button"
                onClick={this.analyze}
              >
                Analyze
              </button>
            </div>
            <div className="result-label">
              <label id="result-label" />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
