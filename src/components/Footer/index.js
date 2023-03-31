import React from "react";
import logoGitHub from "../../assets/logoGitHub.png";
import logoLinkedIn from "../../assets/logoLinkedIn.png";

export default function Footer() {
  return (
    <div className="pt-14 flex justify-center ">
      <div className="px-2">
        <a href="https://github.com/markerpathis" target="_blank" rel="noreferrer">
          <img src={logoGitHub} alt="GitHub Logo" height="50px" />
        </a>
      </div>
      <div className="px-2">
        <a href="https://www.linkedin.com/in/parker-mathis/" target="_blank" rel="noreferrer">
          <img src={logoLinkedIn} alt="LinkedIn Logo" height="50px" />
        </a>
      </div>
    </div>
  );
}
