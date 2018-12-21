import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Content extends React.Component {
  render() {
    const styling = {
      padding: "50dp"
    };

    const CSSDemoStyle = {
      margin: "5%",
      width: "40%"
    };

    return (
      <Row>
        <div style={CSSDemoStyle}>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                s With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </div>

        <div style={CSSDemoStyle}>
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
        </div>
      </Row>
    );
  }
}

export default Content;
