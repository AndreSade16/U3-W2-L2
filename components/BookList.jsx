import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import SearchBar from "./SearchBar";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  const [query, setQuery] = useState("");
  const [selectedBookAsin, setSelectedBookAsin] = useState("");
  const [isSelected, setIsSelected] = useState("");

  console.log("RENDER BOOKLIST");
  return (
    <Container fluid={true}>
      <Row className="d-flex g-3 p-4 justify-content-center">
        <h2 className="text-capitalize text-center text-light">
          {props.array[0].category}
          <SearchBar
            placeholder="Search your book"
            query={query}
            setQuery={(value) => setQuery({ query: value })}
          />
        </h2>
        <Col xs={6} className="row">
          {props.array
            .filter((book) =>
              book.title
                .trim()
                .toLowerCase()
                .includes(query.trim().toLowerCase()),
            )
            .map((item) => {
              return (
                <SingleBook
                  selected={selectedBookAsin === item.asin ? true : false}
                  onClick={() => {
                    setSelectedBookAsin(item.asin);
                    setIsSelected(true);
                  }}
                  key={item.asin}
                  book={item}
                />
              );
            })}
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          {isSelected && <CommentArea asin={selectedBookAsin} />}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
