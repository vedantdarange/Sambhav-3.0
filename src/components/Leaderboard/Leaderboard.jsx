import React from "react";
import "./Leaderboard.css";

// Import assets
import roboticArm from "../Assets/RoboticArm.png";
import gear1 from "../Assets/Gear1.png";
import gear2 from "../Assets/Gear2.png";
import aiChip from "../Assets/AIChip.png";
import cpuChip from "../Assets/CPUChip.png";
import gear3 from "../Assets/Gear3.png";

import cse from "../Assets/cse.png";
import it from "../Assets/it.png";
import aids from "../Assets/aids.png";
import entc from "../Assets/entc.png";
import civil from "../Assets/civil.png";
import mech from "../Assets/mech.png";
import instru from "../Assets/instru.png";
import rna from "../Assets/rna.png";

export default function LeaderBoard() {
  return (
    <div className="leaderboard-page">
      <h1 className="page-title">CODEX</h1>

      {/* Background Icons */}
      <img src={roboticArm} alt="robotic arm" className="icon orange robot-arm" />
      <img src={gear1} alt="GearIcon" className="icon orange gear1" />
      <img src={gear2} alt="GearIcon" className="icon cyan gear2" />
      <img src={aiChip} alt="AICHip" className="icon cyan ai-chip" />
      <img src={cpuChip} alt="CPUChip" className="icon orange cpu-chip" />
      <img src={gear3} alt="GearIcon" className="icon orange gear3" />

      {/* Departments */}
      <div className="container">
        <div className="dept-grid">

          <div className="dept">
            <div className="dept-left">
              <div className="tag">CSE</div>
              <img className="symbol" src={cse} alt="CSE" />
              <div className="dept-name">Computer Science & Engineering</div>
            </div>
            <div className="status">0 pts</div>
          </div>

          <div className="dept">
            <div className="dept-left">
              <div className="tag">IT</div>
              <img className="symbol" src={it} alt="IT" />
              <div className="dept-name">Information Technology</div>
            </div>
            <div className="status">0 pts</div>
          </div>

          <div className="dept">
            <div className="dept-left">
              <div className="tag">AI-DS</div>
              <img className="symbol" src={aids} alt="AI-DS" />
              <div className="dept-name">Artificial Intelligence & Data Science</div>
            </div>
            <div className="status">0 pts</div>
          </div>

          <div className="dept">
            <div className="dept-left">
              <div className="tag">E&TC</div>
              <img className="symbol" src={entc} alt="E&TC" />
              <div className="dept-name">Electronics & Telecommunication</div>
            </div>
            <div className="status">0 pts</div>
          </div>

          <div className="dept">
            <div className="dept-left">
              <div className="tag">CIVIL</div>
              <img className="symbol" src={civil} alt="Civil" />
              <div className="dept-name">Civil Engineering</div>
            </div>
            <div className="status">0 pts</div>
          </div>

          <div className="dept">
            <div className="dept-left">
              <div className="tag">MECH</div>
              <img className="symbol" src={mech} alt="Mech" />
              <div className="dept-name">Mechanical Engineering</div>
            </div>
            <div className="status">0 pts</div>
          </div>

          <div className="dept">
            <div className="dept-left">
              <div className="tag">INSTRU</div>
              <img className="symbol" src={instru} alt="Instrumentation" />
              <div className="dept-name">Instrumentation Engineering</div>
            </div>
            <div className="status">Participating</div>
          </div>

          <div className="dept">
            <div className="dept-left">
              <div className="tag">R&A</div>
              <img className="symbol" src={rna} alt="Robotics" />
              <div className="dept-name">Robotics & Automation</div>
            </div>
            <div className="status">Participating</div>
          </div>

        </div>
      </div>
    </div>
  );
}
