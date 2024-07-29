import React from 'react';
import './teams.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const officers = [
  {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    social: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe'
    }
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    social: {
      facebook: 'https://facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith'
    }
  },
  // Add more officers as needed
];

const Team = () => {
  return (
    <div className="teams">
      <h1>Our Team</h1>
      <div className="team">
        {officers.map((officer, index) => (
          <div key={index} className="card">
            <img src={officer.photo} alt={officer.name} />
            <h2>{officer.name}</h2>
            <div className="social-icons">
              <a href={officer.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href={officer.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={officer.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
