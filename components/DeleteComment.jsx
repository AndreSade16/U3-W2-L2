import { Component } from "react";
import { Button } from "react-bootstrap";

class DeleteComment extends Component {
  render() {
    return (
      <Button
        className="h-25 h-sm-auto ms-2"
        type="button"
        onClick={() => {
          fetch(
            "https://striveschool-api.herokuapp.com/api/comments/" +
              this.props.commentId,
            {
              method: "DELETE",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZWIzNjczOWY4NzAwMTU3YWIwOTEiLCJpYXQiOjE3Nzc1NDgyOTAsImV4cCI6MTc3ODc1Nzg5MH0.-iHusn9xFi63tooky1Eq6S2jSklQkOPP4ttDJWxO524",
              },
            },
          )
            .then((res) => {
              if (res.ok) {
                this.props.getComments(this.props.asin);
              } else {
                throw new Error("Failed to delete comment: ", res.status);
              }
            })
            .catch((err) => alert("Error deleting comment: ", err));
        }}
      >
        Delete
      </Button>
    );
  }
}

export default DeleteComment;
