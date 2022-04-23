import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Details = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://info-app-server-r5jf6tt34-yea-sin.vercel.app/info")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <Container>
      <h2 className="my-5">Stored Details from Form</h2>
      <Row md={4}>
        {details.map((data) => (
          <Col key={data._id}>
            <div className="text-start">
              <h5>Name: {`${data.firstName + " " + data.lastName}`}</h5>
              <h5 className="text-nowrap">Email: {data.email}</h5>
              <h5>Phone: {data.phone}</h5>
              <h5>Job Title: {data.jobTitle}</h5>
              <h5>Country: {data.country}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Details;
