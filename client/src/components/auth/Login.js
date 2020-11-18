import React from "react";
import loginP from "../images/loginP.png";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  async function createUser(data) {
    // Default options are marked with *
    await fetch("/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.history.push({
      pathname: "/partyPage",
      state,
    });
    createUser(state);
    console.log(state);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //put functions up here. Like consts that put it in return
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <img
              src={loginP}
              height="600"
              width="1200"
              crop="fill"
              className="img-fluid"
              alt="login party"
            />
          </div>

          <div className="col-sm-5">
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontFamily: "Georgia",
              }}
            >
              <br />
              Registration <br />
              <br />
            </h1>
            <Form className="register-form" onSubmit={handleOnSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  required
                  name="firstName"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  required
                  name="lastName"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Passord</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                  name="password"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Register & Log in
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;