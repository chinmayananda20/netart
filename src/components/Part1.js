import React from "react";
import image from "../asserts/1.png";
import "../styles/part1.css";
import image2 from "../asserts/2.png";
export default function Part1() {
  return (
    <div className="part1">
      <div className="trophee">
        <img src={image} width="300px" alt="trophee" />
      </div>
      <div className="main">
        <b>
          {" "}
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </b>
        <li>
          C.R.I.'s energy efficient products are well recognized by various
          Government Institutions, as trustworthy products for various projects
          across the globe to save energy.
        </li>
        <li>
          C.R.I. is the highest contributor in the country for the projects of
          EESL (Energy Efficiency Services Limited) to replace the old
          inefficient pumps with 5 Star rated energy efficient smart pumps with
          IoT enabled control panel.
        </li>
        <div className="image">
          <img src={image2} width="600px" alt="Award ceremony" />
        </div>
        <p>
          Government of India has awarded the <b>"National Energy Conservation
          Award 2018"</b> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
}
