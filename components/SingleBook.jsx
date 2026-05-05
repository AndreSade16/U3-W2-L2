import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={12} md={4} key={this.props.book.asin} className="mb-3">
        <Card
          onClick={() => {
            this.setState({ selected: !this.state.selected });
            this.props.onClick();
          }}
          className="h-100 bg-dark text-light overflow-hidden"
          style={{
            border: this.props.selected ? "2px solid red" : "1px solid white",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ aspectRatio: 0.7 }}
          />
          <Card.Body
            className="d-flex flex-column align-items-center"
            style={{ backgroundColor: "#98623e" }}
          >
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
