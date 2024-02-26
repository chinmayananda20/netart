import React from "react";
import image from "../asserts/3.png";
import "../styles/part2.css";
export default function Part2() {
  return (
    <div className="part2">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="image1">
        <img src={image} width="1200px" alt="pumps" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr style={{ border: "1px solid red", width: "95%" }} />
      <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
      <p>
        CHEMICALS & PROCESS
        <span className="text">|</span>
        POWER
        <span className="text">|</span>
        WATER & WASTE WATER
        <span className="text">|</span>
        OILS & GAS
        <span className="text">|</span>
        PHARMA
        <span className="text">|</span>
        SUGARS &<span className="text">|</span>
        DISTILLERIES
        <span className="text">|</span>
        PAPER & PULP
        <span className="text">|</span>
        MARINE & DEFENCE
        <span className="text">|</span>
        METAL & MINING
        <span className="text">|</span>
        FOOD & BEVERAGE
        <span className="text">|</span>
        PETROCHEMICAL & REFINERIES
        <span className="text">|</span>
        SOLAR
        <span className="text">|</span>
        BUILDING
        <span className="text">|</span>
        HVAC
        <span className="text">|</span>
        FIRE FIGHTING
        <span className="text">|</span>
        AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
}
