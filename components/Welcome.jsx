import { Alert } from "react-bootstrap";

const Welcome = (props) => {
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <Alert
        className={props.alertClassName}
        style={{ backgroundColor: "#3d1800" }}
      >
        {props.alertMessage}
      </Alert>
      <p className="text-white text-decoration-underline">
        The coolest Book shop in town!
      </p>
    </div>
  );
};

export default Welcome;
