import React from "react";
import parkerImage from "../assets/parkerImage.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-8 mb-24 m-8">
      <div className="max-w-2xl flex flex-col items-center">
        <img src={parkerImage} className="h-48" />
        <h2 className="text-3xl font-bold pt-8">Hey there! I'm Parker.</h2>
        <p className="pt-4">
          I'm a recent coding bootcamp grad, seeking a career as a full-stack developer. The coding bootcamp I completed was through the University of Washington (September 2022 - March 2023). Check
          out the portfolio tab to see some of my work.
          <h2 className="text-2xl font-bold pt-8 text-center">Skills</h2>
          <p>
            <br />
            HTML, CSS, JavaScript, Express.js, React, Node.js, MongoDB, MySQL, Git, jQuery
            <br />
            <br />
            CSS Frameworks: Bootstrap, Tailwind
          </p>
          <h2 className="text-2xl font-bold pt-8 text-center">About Me</h2>
          <p>
            <br />I live on Camano Island, WA (about 60 miles north of Seattle), with my wife (Joanna) and dog (Bruno).
            <br />
            <br />
            Personal Interests: Hockey (Go Kraken!), Biking, Cooking/BBQing, Video games, Board games.
            <br />
          </p>
        </p>
      </div>
    </div>
  );
}
