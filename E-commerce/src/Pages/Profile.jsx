import React from 'react';

const Profile = () => {
  return (
    <section className="profile-container">
      <div className="profile-card">
        <figure>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Lionel_Messi_WC2022.jpg" alt="Profile" className="profile-image" />
        </figure>
        <h2 className="profile-name">
          Valentino Argenziano
        </h2>
        <p className="profile-email">
          vargenziano@uade.edu.ar
        </p>
      </div>
    </section>
  )
}

export default Profile;
