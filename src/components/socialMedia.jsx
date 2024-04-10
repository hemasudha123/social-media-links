import React from "react";
import Avatar from "../assets/avatar.jpeg";
export default function socialMedia() {
  const mentordetails = [
    {
      name: "GitHub",
    },
    {
      name: "Frontend Mentor",
    },
    {
      name: "Linkedin",
    },
    {
      name: "Twitter",
    },
    {
      name: "Instagram",
    },
  ];
  return (
    <div className="social-media">
      <div className="details-container">
        <img src={Avatar} alt="avatar"/>
        <h2>Jessica Randall</h2>
        <p>London, United Kingdom</p>
        <h5>"Front-end developer and avid reader."</h5>
        {mentordetails.map((item, index) => {
          return <div key={index} className="items-name">{item.name}</div>;
        })}
      </div>
    </div>
  );
}
