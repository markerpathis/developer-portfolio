import React from "react";
import parkerImage from "../assets/parkerImage.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-16">
      <img src={parkerImage} className="h-48" />
      <h2 className="text-3xl font-bold pt-8">Hey there! I'm Parker.</h2>
      <h2 className="text-2xl pt-8">I'm a recent coding bootcamp grad, seeking a career as a full-stack developer.</h2>
    </div>
  );
}
