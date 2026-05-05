import { Form, Row, Col } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <Form
      className="d-flex justify-content-center my-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder={props.placeholder}
            className=" mr-sm-2"
            value={props.query}
            onChange={(e) => {
              props.setQuery(e.target.value);
            }}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
