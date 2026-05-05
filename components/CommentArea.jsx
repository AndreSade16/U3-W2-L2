import { Component } from "react";
import CommentList from "./CommentList";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    error: false,
    loading: true,
  };

  getComments(asin) {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZWIzNjczOWY4NzAwMTU3YWIwOTEiLCJpYXQiOjE3Nzc1NDgyOTAsImV4cCI6MTc3ODc1Nzg5MH0.-iHusn9xFi63tooky1Eq6S2jSklQkOPP4ttDJWxO524",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error parsing response", res.status);
        }
      })
      .then((data) => {
        this.setState({ comments: data, loading: false });
      })
      .catch((err) => {
        alert("Error fetching data: ", err);
        this.setState({ ...this.state, loading: false, error: true });
      });
  }

  componentDidMount() {
    this.getComments(this.props.asin);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.getComments(this.props.asin);
    }
  }

  render() {
    console.log("RENDER COMMENTAREA");
    return this.state.loading ? (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    ) : this.state.error ? (
      <Error />
    ) : (
      <div onClick={(e) => e.stopPropagation()}>
        <CommentList
          asin={this.props.asin}
          comments={this.state.comments}
          setSuperState={(value) => this.setState(value)}
          getComments={(value) => this.getComments(value)}
        />
        <AddComment
          getComments={(value) => this.getComments(value)}
          updateComments={(value) => this.setState(value)}
          asin={this.props.asin}
        />
      </div>
    );
  }
}

export default CommentArea;
