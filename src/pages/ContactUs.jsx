import React, { useState } from "react";
import "./ContactUs.css";

const branches = [
  { name: "Chennai", address: "123 Coffee Street, Anna Nagar, Chennai - 600040" },
  { name: "Coimbatore", address: "45 Aroma Road, Gandhipuram, Coimbatore - 641012" },
  { name: "Bangalore", address: "22 Brew Park, Indiranagar, Bangalore - 560038" },
  { name: "Hyderabad", address: "88 Roast Lane, Banjara Hills, Hyderabad - 500034" },
  { name: "Mumbai", address: "98 Bean Lane, Andheri West, Mumbai - 400053" },
  { name: "Pune", address: "72 Aroma Valley, Kothrud, Pune - 411038" },
  { name: "New Delhi", address: "183, Red Fort Road, New Delhi - 110006" },
  { name: "Kolkata", address: "56 Brew Market, Salt Lake, Kolkata - 700091" },
];

const ContactUs = () => {
  const [current, setCurrent] = useState(0);

  const nextBranch = () => setCurrent((prev) => (prev + 1) % branches.length);
  const prevBranch = () =>
    setCurrent((prev) => (prev - 1 + branches.length) % branches.length);

  return (
    <div
      className="contact-section"
      style={{
        backgroundImage: `url("/coffee-bg.jpg")`,
      }}
    >
      <div className="content-wrapper">

        {/* ENQUIRY FORM */}
        <div className="form-section">
          <h2>Enquiry Form</h2>

          <form>
            <input type="text" placeholder="Name*" required />
            <input type="tel" placeholder="Phone*" required />
            <input type="email" placeholder="Email*" required />

            <select required>
              <option value="">Product Type*</option>
              <option value="beans">Coffee Beans</option>
              <option value="powder">Coffee Powder</option>
              <option value="machine">Coffee Machine</option>
            </select>

            <textarea rows="3" placeholder="Message"></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* CONTACT INFORMATION BOXES */}
        <div className="info-row">
          <div>
            <h4>MOBILE</h4>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h4>EMAIL</h4>
            <p>support@coffeeandlove.com</p>
          </div>

          <div>
            <h4>TOLL FREE</h4>
            <p>1800-202-9090</p>
          </div>
        </div>

        {/* BRANCH SLIDER */}
        <h3 className="branches-title">Branches</h3>

        <div className="branch-slider-row">
          <button className="arrow-btn" onClick={prevBranch}>❮</button>

          <div className="branch-scroll">
            {branches.map((b, i) => (
              <button
                key={i}
                className={`branch-pill ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              >
                {b.name}
              </button>
            ))}
          </div>

          <button className="arrow-btn" onClick={nextBranch}>❯</button>
        </div>

        {/* ADDRESS DISPLAY */}
        <div className="address-box">
          <h4>{branches[current].name}</h4>
          <p>{branches[current].address}</p>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;






