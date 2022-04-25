import axios from "axios";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const handleForm = (e) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const newUser = { email, password };
    axios
      .post("https://info-app-server.vercel.app/user/singup", newUser)
      .then((data) => {
        if (data.status === 200) {
          alert("Successfully singup");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <>
        <h2>Please Singup</h2>
        <Container className="my-5 py-5 text-center d-flex justify-content-center form-container">
          <form
            onSubmit={handleForm}
            className="d-flex flex-column justify-content-center w-50 "
          >
            <input
              ref={emailRef}
              type="email"
              placeholder="Type email"
              name="email"
            />
            <input
              ref={passRef}
              type="password"
              placeholder="Type password"
              name="password"
            />
            <p className="text-dark">
              Already have an account ?{" "}
              <Link className="text-decoration-none text-dark" to="/login">
                Login
              </Link>
            </p>
            <button type="submit" className="btn btn-dark">
              Singup
            </button>
          </form>
        </Container>
      </>
    </div>
  );
};

export default Register;
