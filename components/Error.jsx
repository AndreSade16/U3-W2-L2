import { Component } from "react";
import { Alert } from "react-bootstrap";

class Error extends Component {
  render() {
    return <Alert variant="danger">Error with server!</Alert>;
  }
}

export default Error;
