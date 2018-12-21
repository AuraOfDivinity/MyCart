import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Content extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Content;
