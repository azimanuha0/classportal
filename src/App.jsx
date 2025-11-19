import React from "react";
import StudentCard from "./components/StudentCard";
import { activeStudents, alumniStudents } from "./data/students";
import "./styles.css";

function mostCommonSkill(allStudents) {
  const freq = {};
  allStudents.forEach(s => {
    s.skills.forEach(skill => {
      const key = skill.trim();
      freq[key] = (freq[key] || 0) + 1;
    });
  });
  const entries = Object.entries(freq);
  if (entries.length === 0) return "N/A";
  entries.sort((a,b) => b[1] - a[1]);
  return entries[0][0];
}

export default function App() {
  const all = [...activeStudents, ...alumniStudents];
  const total = all.length;
  const activeCount = activeStudents.length;
  const alumniCount = alumniStudents.length;
  const commonSkill = mostCommonSkill(all);

  return (
    <div className="container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p>Full Stack Development Batch</p>
      </header>

      <div className="stats">
        <div className="stat">Total Students: <strong>{total}</strong></div>
        <div className="stat">Active: <strong>{activeCount}</strong></div>
        <div className="stat">Alumni: <strong>{alumniCount}</strong></div>
        <div className="stat">Most common skill: <strong>{commonSkill}</strong></div>
      </div>

      <section className="group">
        <h2>Active Students</h2>
        <div className="student-grid">
          {activeStudents.map(student => (
            <StudentCard
              key={student.rollNumber}
              {...student}
            />
          ))}
        </div>
      </section>

      <section className="group">
        <h2>Alumni</h2>
        <div className="student-grid">
          {alumniStudents.map(student => (
            <StudentCard
              key={student.rollNumber}
              {...student}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>Full Stack Development — Your Institution Name</div>
        <div>Contact: course-admin@example.com</div>
        <div>© 2025 Student Portal</div>
      </footer>
    </div>
  );
}
