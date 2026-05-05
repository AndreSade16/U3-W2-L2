import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import Error from "./Error";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getComments = (asin) => {
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
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        alert("Error fetching data: ", err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getComments(props.asin);
  }, [props.asin]);

  console.log("RENDER COMMENTAREA");
  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : error ? (
    <Error />
  ) : (
    <div onClick={(e) => e.stopPropagation()}>
      <CommentList
        asin={props.asin}
        comments={comments}
        getComments={(value) => getComments(value)}
      />
      <AddComment
        getComments={(value) => getComments(value)}
        updateComments={(value) => setComments(value)}
        asin={props.asin}
      />
    </div>
  );
};

export default CommentArea;
