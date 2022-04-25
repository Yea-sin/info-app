import React, { useRef } from "react";
import "./Form.css";
import { Container } from "react-bootstrap";
import axios from "axios";

const Form = () => {
  const blockchainRef = useRef();
  const enquiryRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const websiteRef = useRef();
  const jobRef = useRef();
  const countryRef = useRef();
  const budgetRef = useRef();
  const aboutUsRef = useRef();
  const completionRef = useRef();
  const organizationRef = useRef();
  const messageRef = useRef();
  const handleForm = (e) => {
    const blockchain = blockchainRef.current.value;
    const enquiry = enquiryRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const company = companyRef.current.value;
    const website = websiteRef.current.value;
    const jobTitle = jobRef.current.value;
    const budget = budgetRef.current.value;
    const aboutUs = aboutUsRef.current.value;
    const completion = completionRef.current.value;
    const country = countryRef.current.value;
    const organization = organizationRef.current.value;
    const message = messageRef.current.value;

    const newInfo = {
      blockchain,
      enquiry,
      firstName,
      lastName,
      phone,
      email,
      company,
      website,
      jobTitle,
      budget,
      aboutUs,
      completion,
      country,
      organization,
      message,
    };
    // console.log(newInfo);
    console.log(newInfo);
    axios
      .post(
        "https://info-app-server-b52oy7fsh-yea-sin.vercel.app/info",
        newInfo
      )
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          alert("Submitted");
          e.target.reset();
        } else {
          alert("there was an error");
        }
      });
    e.preventDefault();
  };
  return (
    <Container className="my-5 ">
      <h2 className="my-5 pb-5 text-secondary">Please leave a message</h2>
      <div className="info-form-container  ">
        <form onSubmit={handleForm} className="row shadow-lg p-4 text-center">
          <div className="col-md-6">
            <p>Does your enquiry relate to blockchain?:</p>

            <input
              className="radio-input"
              ref={blockchainRef}
              type="radio"
              id="yes"
              name="blockchain"
              value="yes"
            />
            <label className="" htmlFor="yes">
              YES
            </label>

            <input
              className="radio-input"
              ref={blockchainRef}
              type="radio"
              id="no"
              name="blockchain"
              value="no"
            />
            <label className="" htmlFor="no">
              NO
            </label>
          </div>
          <div className="col-md-6">
            <p>Nature Of Enquiry</p>
            <select required ref={enquiryRef} name="enquiry">
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="Web Design">Web Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>
          <div className="col-md-6">
            <p>First Name</p>
            <input
              required
              className="input-field"
              ref={firstNameRef}
              type="text"
            />
          </div>
          <div className="col-md-6">
            <p>Last Name</p>
            <input
              required
              className="input-field"
              ref={lastNameRef}
              type="text"
            />
          </div>
          <div className="col-md-6">
            <p>phone</p>
            <input
              required
              className="input-field"
              ref={phoneRef}
              type="text"
            />
          </div>
          <div className="col-md-6">
            <p>email</p>
            <input
              required
              className="input-field"
              ref={emailRef}
              type="text"
            />
          </div>
          <div className="col-md-6">
            <p>Company Name</p>
            <input
              required
              className="input-field"
              ref={companyRef}
              type="text"
            />
          </div>
          <div className="col-md-6">
            <p>Website Url</p>
            <input className="input-field" ref={websiteRef} type="text" />
          </div>
          <div className="col-md-6">
            <p>Job Title</p>
            <input className="input-field" ref={jobRef} type="text" />
          </div>
          <div className="col-md-6">
            <p>Country</p>
            <select required ref={countryRef} name="country">
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="Australia">Australia</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">Audi</option>
              <option value="Thiland">Thiland</option>
            </select>
          </div>
          <div className="col-md-6">
            <p>Estimate Budget</p>
            <select required ref={budgetRef} name="budget">
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="$1000-$3000">$1000-$3000</option>
              <option value="$3000-$5000">$3000-$5000</option>
              <option value="$5000-$8000">$5000-$8000</option>
              <option value="$8000-$15000">$8000-$15000</option>
            </select>
          </div>
          <div className="col-md-6">
            <p>How did you find about us</p>
            <select required ref={aboutUsRef} name="aboutUs">
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="Social Media">Social Media</option>
              <option value="Blog">Blog</option>
              <option value="Friend">Friend</option>
            </select>
          </div>
          <div className="col-md-6">
            <p>Desired completion date</p>
            <select required ref={completionRef} name="completion">
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="1 Week">1 Week</option>
              <option value="2 Week">2 Week</option>
              <option value="3 Week">3 Week</option>
              <option value="4 Week">4 Week</option>
            </select>
          </div>
          <div className="col-md-6">
            <p>Type of organization</p>
            <select required ref={organizationRef} name="organization">
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="Agency">Agency</option>
              <option value="Company">Company</option>
              <option value="Team">Team</option>
            </select>
          </div>
          <div className="col-md-12 w-100 mt-5">
            <p>Current Message</p>
            <textarea
              required
              ref={messageRef}
              className="w-100 h-50"
              name="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="form-btn btn btn-outline-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
