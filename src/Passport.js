// src/Passport.js
import React, { useState, useMemo } from "react";

function Passport({ name: initialName, bio: initialBio, imgUrl }) {
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);
  const [isEditing, setIsEditing] = useState(false);
  const [myPlug] = useState(85);
  const [totalConnections] = useState(7);
  const [status, setStatus] = useState("Feeling social! 🌟");

  const [dobDay, setDobDay] = useState("1");
  const [dobMonth, setDobMonth] = useState("January");
  const [dobYear, setDobYear] = useState("2000");

  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]); // 🆕 suggestions list
  const [showSuggestions, setShowSuggestions] = useState(false);

  const badges = ["🎮", "💻", "🚀", "🎵"];

  const months = useMemo(
    () => [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ],
    []
  );
  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => i + 1), []);
  const years = useMemo(() => Array.from({ length: 100 }, (_, i) => 2025 - i), []);

  /** Fetch suggestions from Nominatim */
  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setSuggestions(data.slice(0, 5)); // top 5 results
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setAddress(suggestion.display_name);
    setShowSuggestions(false);
  };

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
      {/* Passport Photo */}
      <img
        src={imgUrl}
        alt="Passport"
        style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover", marginBottom: "15px" }}
      />

      {/* Editable Info */}
      {isEditing ? (
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            style={{ display: "block", margin: "10px auto", width: "80%", padding: "5px" }}
          />
          <input
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Enter bio"
            style={{ display: "block", margin: "10px auto", width: "80%", padding: "5px" }}
          />
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Enter status"
            style={{ display: "block", margin: "10px auto", width: "80%", padding: "5px" }}
          />

          {/* DOB Inputs */}
          <div style={{ marginTop: "10px" }}>
            <label>Date of Birth: </label>
            <select value={dobDay} onChange={(e) => setDobDay(e.target.value)} style={{ margin: "0 5px" }}>
              {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
            <select value={dobMonth} onChange={(e) => setDobMonth(e.target.value)} style={{ margin: "0 5px" }}>
              {months.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
            <select value={dobYear} onChange={(e) => setDobYear(e.target.value)} style={{ margin: "0 5px" }}>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>

          {/* Address Input with Free Autocomplete */}
          <div style={{ position: "relative" }}>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                fetchSuggestions(e.target.value);
              }}
              placeholder="Enter address"
              style={{ display: "block", margin: "10px auto", width: "80%", padding: "5px" }}
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul style={{
                position: "absolute",
                left: "10%",
                width: "80%",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "5px",
                maxHeight: "150px",
                overflowY: "auto",
                zIndex: 1000,
                listStyle: "none",
                margin: 0,
                padding: 0
              }}>
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    onClick={() => handleSelectSuggestion(s)}
                    style={{ padding: "8px", cursor: "pointer" }}
                  >
                    {s.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => setIsEditing(false)}
            style={{ padding: "5px 10px", marginTop: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
          <p>Status: {status}</p>
          <p><strong>Date of Birth:</strong> {dobDay} {dobMonth}, {dobYear}</p>
          <p><strong>Address:</strong> {address || "Not provided"}</p>

          {/* Badges */}
          <div style={{ marginTop: "10px" }}>
            <strong>Badges / Interests:</strong>
            <div style={{ fontSize: "24px", marginTop: "5px" }}>
              {badges.map((badge, index) => (
                <span key={index} style={{ margin: "0 5px" }}>{badge}</span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            style={{ padding: "5px 10px", marginTop: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Edit Passport
          </button>
        </div>
      )}

      {/* MyPlug Section */}
      <div style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #4CAF50",
        borderRadius: "10px",
        backgroundColor: "#E8F5E9",
        width: "200px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <h3>MyPlug</h3>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2E7D32" }}>{myPlug}</p>
        <p>Plugs: {totalConnections}</p>
      </div>
    </div>
  );
}

export default Passport;
