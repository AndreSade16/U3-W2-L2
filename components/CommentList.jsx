import { ListGroup } from "react-bootstrap";
import DeleteComment from "./DeleteComment";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.comments.map((comment) => {
        return (
          <ListGroup.Item
            key={comment._id}
            className="d-flex justify-content-between"
          >
            {comment.comment} - {comment.rate}/5
            <DeleteComment
              getComments={props.getComments}
              asin={props.asin}
              commentId={comment._id}
              setSuperState={props.setSuperState}
            />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
