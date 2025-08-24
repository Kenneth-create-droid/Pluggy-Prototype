import React, { useState } from "react";

function Passport({ name: initialName, bio: initialBio, imgUrl }) {
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);
  const [isEditing, setIsEditing] = useState(false);
  const [score, setScore] = useState(85); // Example MyPlug Score

  // New state for DOB
  const [dobDay, setDobDay] = useState("1");
  const [dobMonth, setDobMonth] = useState("January");
  const [dobYear, setDobYear] = useState("2000");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => 2025 - i); // Example: last 100 years

  return (
    <div style={{
      border: "2px solid #333",
      borderRadius: "15px",
      padding: "20px",
      maxWidth: "400px",
      margin: "20px auto",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <img
        src={imgUrl}
        alt="Passport"
        style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover", marginBottom: "15px" }}
      />

      {isEditing ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} style={{ display: "block", margin: "10px auto", width: "80%", padding: "5px" }} />
          <input value={bio} onChange={(e) => setBio(e.target.value)} style={{ display: "block", margin: "10px auto", width: "80%", padding: "5px" }} />

          {/* DOB Inputs */}
          <div style={{ marginTop: "10px" }}>
            <label>Date of Birth: </label>
            <select value={dobDay} onChange={(e) => setDobDay(e.target.value)} style={{ margin: "0 5px" }}>
              {days.map((day) => <option key={day} value={day}>{day}</option>)}
            </select>
            <select value={dobMonth} onChange={(e) => setDobMonth(e.target.value)} style={{ margin: "0 5px" }}>
              {months.map((month) => <option key={month} value={month}>{month}</option>)}
            </select>
            <select value={dobYear} onChange={(e) => setDobYear(e.target.value)} style={{ margin: "0 5px" }}>
              {years.map((year) => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>

          <button onClick={() => setIsEditing(false)} style={{ padding: "5px 10px", marginTop: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
          <p><strong>Date of Birth:</strong> {dobDay} {dobMonth}, {dobYear}</p>
          <button onClick={() => setIsEditing(true)} style={{ padding: "5px 10px", marginTop: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Edit Passport</button>
        </div>
      )}

      {/* MyPlug Score */}
      <div style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #4CAF50",
        borderRadius: "10px",
        backgroundColor: "#E8F5E9",
        width: "180px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <h3>MyPlug Score</h3>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2E7D32" }}>{score}</p>
      </div>
    </div>
  );
}

export default Passport;
