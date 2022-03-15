import React from "react";

import Image from './imageInSrc.jpg'
const Jsx = () => {
  return (
<div>
  <div style={{ border: "solid 1px black", maxWidth:"100vw" }}>
    <h1 className="title red">Salut (y)</h1>
    <br />
    <img src={Image} />
    <br />
    <img src="imageInPublic.jpg" />
  </div>
  <div>
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
  </div>
</div>
)}

export default Jsx; 
