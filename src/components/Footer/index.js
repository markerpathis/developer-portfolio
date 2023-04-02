import React from "react";
import logoLinkedIn from "../../assets/In-White-96.png";
import logoGitHub from "../../assets/github-mark-white.png";

export default function Footer() {
  return (
    <div className="py-3.5 fixed bottom-0 w-full flex justify-center bg-black">
      <div className="px-2">
        <a href="https://github.com/markerpathis" target="_blank" rel="noreferrer">
          <img className="h-8" src={logoGitHub} alt="GitHub Logo" />
        </a>
      </div>
      <div className="px-2">
        <a href="https://www.linkedin.com/in/parker-mathis/" target="_blank" rel="noreferrer">
          <img className="h-8" src={logoLinkedIn} alt="LinkedIn Logo" />
        </a>
      </div>
    </div>
  );
}
