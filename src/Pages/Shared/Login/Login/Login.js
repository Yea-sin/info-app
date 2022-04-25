import axios from "axios";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const handleForm = (e) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const newUser = { email, password };
    const token = localStorage.getItem("authorization");
    axios.post("https://info-app-server.vercel.app/user/login", newUser);
    fetch("https://info-app-server.vercel.app/user/login", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data.data.accessToken);
          localStorage.setItem("authorization", data.data.accessToken);
          alert("Successfully singup");
          e.target.reset();
        } else {
          alert("Authorization failed!");
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <h1>Comming Soon....</h1>
      {/* <h2>Please Login</h2>
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
            Don't have an account ?{" "}
            <Link className="text-decoration-none text-dark" to="/singup">
              Register
            </Link>
          </p>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
      </Container> */}
    </>
  );
};

export default Login;
