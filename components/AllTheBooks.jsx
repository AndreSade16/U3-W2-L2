import { Card, Container, Row, Col, Button } from "react-bootstrap";
import booksList from "../public/horror.json";

const AllTheBooks = () => {
  return (
    <Container fluid={true}>
      <Row className="d-flex g-3 p-4">
        {booksList.map((book) => {
          return (
            <Col xs={12} md={4} lg={3} xl={2} key={book.asin}>
              <Card className="h-100 bg-dark border-light text-light overflow-hidden">
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ aspectRatio: 0.7 }}
                />
                <Card.Body
                  className="d-flex flex-column"
                  style={{ backgroundColor: "#98623e" }}
                >
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className="text-capitalize">
                    {book.category}
                  </Card.Text>
                  <Card.Text className="fw-bold mt-auto">
                    {book.price.toFixed(2)}$
                  </Card.Text>
                  <Button
                    variant="light"
                    style={{ backgroundColor: "#3d1800" }}
                    className="w-auto text-white"
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
