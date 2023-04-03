import React from "react";
import ResumeDoc from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <div className="flex flex-col items-center pt-16 px-64 mb-24">
      <h2 className="text-3xl font-bold">Resume</h2>
      <br></br>
      <a href={ResumeDoc} target="_blank" rel="noreferrer" className="inline-block bg-[#49AB8C] hover:bg-[#2B6452] text-white text-sm font-semibold py-2 px-4 rounded mr-2 mb-2">
        Download Resume
      </a>
      <p>
        <br></br>
        <h2>Skills Summary:</h2>
        <br></br>
        <ul className="list-none">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git</li>
        </ul>
      </p>
    </div>
  );
}
