import React, { useRef } from "react";
import "./Form.css";
import { Container } from "react-bootstrap";
import axios from "axios";

const Form = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const jobRef = useRef();
  const countryRef = useRef();
  const handleForm = (e) => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const jobTitle = jobRef.current.value;
    const country = countryRef.current.value;
    const newInfo = { firstName, lastName, email, phone, jobTitle, country };
    console.log(newInfo);
    axios.post("http://localhost:5000/info", newInfo).then((data) => {
      if (data.status === 200) {
        alert("Submitted Successfully");
        e.target.reset();
      } else {
        alert("there was an error");
      }
    });
    e.preventDefault();
  };
  return (
    <Container className="my-5">
      <h2 className="my-5">Please provide contact details</h2>
      <div className="form-container">
        <form onSubmit={handleForm} className="row row-cols-2 g-5">
          <input ref={firstNameRef} placeholder="First Name" type="text" />
          <input ref={lastNameRef} placeholder="Last Name" type="text" />
          <input ref={emailRef} placeholder="Email" type="text" />
          <input ref={phoneRef} placeholder="Phone" type="text" />
          <input ref={jobRef} placeholder="Job Title" type="text" />
          <input ref={countryRef} placeholder="Country" type="text" />
          <button className="form-btn btn btn-outline-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
