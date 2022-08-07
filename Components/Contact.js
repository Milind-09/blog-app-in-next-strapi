import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Send us a Message!</h1>
      <div className="form">
        <form action="/contact" method="post">
          <label htmlFor="Your Name">Your Name</label>
          <input type="text" name="" />
          <label htmlFor="Your Email">Your Email</label>
          <input type="email" name="" />
          <label htmlFor="Subject">Subject</label>
          <input type="text" name="" />
          <label htmlFor="Phone Number">Phone Number</label>
          <input type="number" name="" />
          <label htmlFor="Your Message">Your Message</label>
          <textarea name="" cols="30" rows="5"></textarea>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
