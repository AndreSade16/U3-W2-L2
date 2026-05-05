import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import DeleteComment from "./DeleteComment";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.map((comment) => {
          return (
            <ListGroup.Item
              key={comment._id}
              className="d-flex justify-content-between"
            >
              {comment.comment} - {comment.rate}/5
              <DeleteComment
                getComments={this.props.getComments}
                asin={this.props.asin}
                commentId={comment._id}
                setSuperState={this.props.setSuperState}
              />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
