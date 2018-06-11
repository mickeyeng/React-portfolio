import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  FormText
} from "reactstrap";

const FormInput = props => {
  return (
    <div className="form-group ">
      <div className="d-flex input-container">
        <Col className="input-icon" style={{ padding: "0px" }} md="1">
          <i style={{ color: "#3ad3cf" }} className={props.icon} />
        </Col>

        <Col style={{ padding: "0px" }} md="11">
          <Input
            className="form-control input jusify-content-center"
            placeholder={props.placeholder}
          />
        </Col>
      </div>
    </div>
  );
};

export default FormInput;
