import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Details = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://info-app-server-b52oy7fsh-yea-sin.vercel.app/info")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <Container>
      <h2 className="my-5">Stored Data from Form</h2>
      <Row md={3} className="g-5">
        {details.map((data) => (
          <Col key={data._id}>
            <div className="text-start">
              <small className="  ">Blockchain: {data.blockchain}</small> <br />
              <small className="  ">Enquiry: {data.enquiry}</small> <br />
              <small className="  ">
                Name: {`${data.firstName + " " + data.lastName}`}
              </small>{" "}
              <br />
              <small className="  ">Phone: {data.phone}</small> <br />
              <small className="overflow-hidden   ">
                Email: {data.email}
              </small>{" "}
              <br />
              <small className="  ">Company: {data.company}</small> <br />
              <small className="  ">Website: {data.website}</small> <br />
              <small className="  ">Job Title: {data.jobTitle}</small> <br />
              <small className="  ">Budget: {data.budget}</small> <br />
              <small className="  ">About Us: {data.aboutUs}</small> <br />
              <small className="  ">Completion: {data.completion}</small> <br />
              <small className="  ">Country: {data.country}</small> <br />
              <small className="  ">
                Organization: {data.organization}
              </small>{" "}
              <br />
              <small className="  ">Message: {data.message}</small>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Details;
