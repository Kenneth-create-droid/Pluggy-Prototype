import React from "react";

function Profile() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        style={{ borderRadius: "50%" }}
      />
      <h2>Kenneth Nnah</h2>
      <p>Software Engineering Student | Pluggy Creator 🚀</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default Profile;