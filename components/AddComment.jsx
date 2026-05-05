import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (props) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  // const [elementId, setElementId] = useState(props.asin);

  return (
    <>
      <h3 className="mt-2 text-white">Enter a new review for this book:</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              rate: rate,
              elementId: props.asin,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZWIzNjczOWY4NzAwMTU3YWIwOTEiLCJpYXQiOjE3Nzc1NDgyOTAsImV4cCI6MTc3ODc1Nzg5MH0.-iHusn9xFi63tooky1Eq6S2jSklQkOPP4ttDJWxO524",
            },
          })
            .then((res) => {
              if (res.ok) {
                setComment("");
                setRate(1);
                // setElementId(props.asin);
                props.getComments(props.asin);
              } else {
                throw new Error("Error in sending review...");
              }
            })
            .catch((err) => {
              alert("Error: ", err);
            });
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label className="text-white" htmlFor="review">
            Review:
          </Form.Label>
          <Form.Control
            id="review"
            type="text"
            placeholder="Enter review"
            required={true}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-white" htmlFor="rating">
            Rating:
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Rating"
            id="rating"
            min={1}
            max={5}
            required={true}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
