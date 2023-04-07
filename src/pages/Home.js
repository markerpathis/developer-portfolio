import React from "react";
import parkerImage from "../assets/parkerImage.png";

export default function Home() {
  return (
    <div className="m-8 ">
      <div className="flex flex-col items-center pt-16 mb-24">
        <div className="max-w-5xl flex flex-col items-center">
          <img src={parkerImage} className="h-48" />
          <h2 className="text-3xl font-bold pt-8">Hey there! I'm Parker.</h2>
          <h2 className="text-2xl pt-8">I'm a recent coding bootcamp grad, seeking a career as a full-stack developer.</h2>
          <br /> <br />
          <h2 className="text-3xl font-bold">About Me</h2>
          <p>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus quam, faucibus id dolor eu, posuere imperdiet nunc. Ut hendrerit ligula eget porta sodales. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Nulla at tortor a lacus fringilla ultricies eu et libero. Vestibulum a mauris dui. Sed convallis massa venenatis massa dapibus,
            eu interdum nibh congue. Quisque hendrerit sed felis nec porttitor. Duis quis arcu vel tellus viverra blandit eu nec urna. Nulla facilisi. Curabitur arcu quam, finibus a vehicula et,
            porttitor et dui. Donec metus diam, euismod eu purus consequat, porta placerat purus. Cras vestibulum orci at tellus pharetra euismod. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nam sit amet placerat eros. Cras aliquam elit lectus, vel semper lacus tincidunt a. Ut viverra, nulla nec vestibulum dapibus, odio nisl pharetra est, ut commodo massa quam id
            metus.
          </p>
        </div>
      </div>
    </div>
  );
}
