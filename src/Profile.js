import React, { useState } from "react";

function Profile({ name: initialName, bio: initialBio, imgUrl }) {
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img
        src={imgUrl}
        alt="Profile"
        style={{ borderRadius: "50%" }}
      />

      {isEditing ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={bio} onChange={(e) => setBio(e.target.value)} />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
