import React, { Component } from "react";
import { Carousel, Row, Col, Button, Card } from "react-bootstrap";
import dimg from "../images/dimg.jpeg";
import dimg2 from "../images/dimg2.jpg";
import dimg3 from "../images/dimg3.jpeg";
import app from "../images/app.jpg";
import app2 from "../images/app2.jpg";

class ClassificationDiv extends Component {
  state = {};

  render() {
    return (
      <div className="cards">
        <div className="container">
          <Row className="d-flex justify-content-center">
            <Col xs={10} md={6} lg={5} className="text-center">
              <Card className="cardItem text-center">
                <Card.Body>
                  <Carousel indicators={false} interval={1500}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={dimg}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={dimg2}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={dimg3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Title>Detect Online Now</Card.Title>
                  <Card.Text>
                    package from 5 contributors and audited 905423 packages in
                    48.55s
                  </Card.Text>
                  <Button onClick={this.props.goToClassifier}>
                    Upload Image
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={6} lg={5} className="text-center">
              {/* <CardItem
                  // titleimg={play}
                  title="Download Our App"
                  txt="package from 5 contributors and audited 905423 packages in 48.55s "
                /> */}
              <Card className="cardItem text-center">
                <Card.Body>
                  <Carousel indicators={false} interval={1500}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={app2}
                        alt="First slide"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={app}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Title>Download Our App</Card.Title>
                  <Card.Text>
                    package from 5 contributors and audited 905423 packages in
                    48.55s
                  </Card.Text>
                  <a href="https://www.google.com" target="blank">
                    <Button>Go To Google Play</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ClassificationDiv;
