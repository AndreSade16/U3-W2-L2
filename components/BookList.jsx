import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import SearchBar from "./SearchBar";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    query: "",
    selectedBookAsin: "",
    isSelected: false,
  };

  render() {
    console.log("RENDER BOOKLIST");
    return (
      <Container fluid={true}>
        <Row className="d-flex g-3 p-4 justify-content-center">
          <h2 className="text-capitalize text-center text-light">
            {this.props.array[0].category}
            <SearchBar
              placeholder="Search your book"
              query={this.state.query}
              setQuery={(value) => this.setState({ query: value })}
            />
          </h2>
          <Col xs={6} className="row">
            {this.props.array
              .filter((book) =>
                book.title
                  .trim()
                  .toLowerCase()
                  .includes(this.state.query.trim().toLowerCase()),
              )
              .map((item) => {
                return (
                  <SingleBook
                    selected={
                      this.state.selectedBookAsin === item.asin ? true : false
                    }
                    onClick={() =>
                      this.setState({
                        selectedBookAsin: item.asin,
                        isSelected: true,
                      })
                    }
                    key={item.asin}
                    book={item}
                  />
                );
              })}
          </Col>
          <Col xs={6} className="d-flex justify-content-center">
            {this.state.isSelected && (
              <CommentArea asin={this.state.selectedBookAsin} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
