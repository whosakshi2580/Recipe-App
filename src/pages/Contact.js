import React from "react";
export default function Contact() {
  return (
    <section className="section about-section">
      <div className="contactform">
      <div className="container">
  <h2>Contact Us</h2>
  <div className="row100">
    <div className="col">
      <div className="inputBox">
        <input type="text" name="" required="" />
        <span className="text">First Name</span>
        <span className="line" />
      </div>
    </div>
    <div className="col">
      <div className="inputBox">
        <input type="text" name="" required="" />
        <span className="text">Last Name</span>
        <span className="line" />
      </div>
    </div>
    <div className="col">
      <div className="inputBox">
        <input type="text" name="" required="" />
        <span className="text">Email</span>
        <span className="line" />
      </div>
    </div>
    <div className="col">
      <div className="inputBox">
        <input type="text" name="" required="" />
        <span className="text">Phone</span>
        <span className="line" />
      </div>
    </div>
  </div>
  <div className="row100">
    <div className="col">
      <div className="inputBox textarea">
        <textarea required="" defaultValue={""} />
        <span className="text">Your Message..</span>
        <span className="line" />
      </div>
    </div>
  </div>
  <div className="row100">
    <div className="col">
      <input type="submit" defaultValue="Send" />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
