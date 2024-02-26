import React from "react";
import "../styles/footer.css";
import phone from "../asserts/phone-16.png";
import globe from '../asserts/globe.svg'
export default function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <footer>
        <div>
          <div className="logo">
            <img src={phone} alt="phone" />
          </div>
          Toll free <b>1800 200 1234</b>
        </div>
        <div>
          <div className="logo">
            <i
              class="fa fa-facebook-f"
              style={{ fontSize: "20px", color: "red" }}
            ></i>
          </div>
          <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
        </div>
        <div>
        <div className="logo">
            <img src={globe} alt="globe" />
          </div>
          <a href="www.crigroups.com">www.crigroups.comcrigroups</a>
        </div>
      </footer>
    </div>
  );
}
