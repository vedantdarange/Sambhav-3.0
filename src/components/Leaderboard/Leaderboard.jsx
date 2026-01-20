import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

import { leaderboardData } from "../../data/leaderboardData";

import roboticArm from "../Assets/RoboticArm.png";
import gear1 from "../Assets/Gear1.png";
import gear2 from "../Assets/Gear2.png";
import aiChip from "../Assets/AIChip.png";
import cpuChip from "../Assets/CPUChip.png";
import gear3 from "../Assets/Gear3.png";

export default function LeaderBoard() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const sortedData = [...leaderboardData].sort((a, b) => b.points - a.points);
    setDepartments(sortedData);
  }, []);

  const getScoreClass = (points) => {
    if (points >= 100) return "status top-score";
    if (points >= 80) return "status second-score";
    return "status";
  };

  return (
    <div className="leaderboard-page">
      <h1 className="page-title">CODEX</h1>

      <img src={roboticArm} alt="robotic arm" className="icon orange robot-arm" />
      <img src={gear1} alt="GearIcon" className="icon orange gear1" />
      <img src={gear2} alt="GearIcon" className="icon cyan gear2" />
      <img src={aiChip} alt="AICHip" className="icon cyan ai-chip" />
      <img src={cpuChip} alt="CPUChip" className="icon orange cpu-chip" />
      <img src={gear3} alt="GearIcon" className="icon orange gear3" />

      <div className="container">
        <div className="dept-grid">
          {departments.map((dept, index) => (
            <div className="dept" key={dept.id}>
              <div className="dept-left">
                <div className="tag">{dept.tag}</div>
                <img className="symbol" src={dept.img} alt={dept.tag} />
                <div className="dept-name">{dept.name}</div>
              </div>
              <div className={getScoreClass(dept.points)}>{dept.points} pts</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
