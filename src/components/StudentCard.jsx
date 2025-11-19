import React from "react";
import "../styles.css";

export default function StudentCard({ name, rollNumber, course, email, skills = [], isActive }) {
  return (
    <div className="card">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <h3>{name}</h3>
          <div className="meta">Roll: {rollNumber} · {course}</div>
        </div>
        <div>
          <span
            className="status"
            style={{
              background: isActive ? "rgba(34,197,94,0.12)" : "rgba(148,163,184,0.12)",
              color: isActive ? "#16a34a" : "#475569",
            }}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </div>

      <div className="badges">
        <div className="meta">{email}</div>
      </div>

      <div className="skills">
        {skills.map((skill) => (
          <div key={`${rollNumber}-${skill}`} className="skill">{skill}</div>
        ))}
      </div>
    </div>
  );
}
