import { useState } from "react";
import { Col, Card } from "react-bootstrap";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <Col xs={12} md={4} key={props.book.asin} className="mb-3">
      <Card
        onClick={() => {
          setSelected(!selected);
          props.onClick();
        }}
        className="h-100 bg-dark text-light overflow-hidden"
        style={{
          border: props.selected ? "2px solid red" : "1px solid white",
        }}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          style={{ aspectRatio: 0.7 }}
        />
        <Card.Body
          className="d-flex flex-column align-items-center"
          style={{ backgroundColor: "#98623e" }}
        >
          <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
