import React, { useState } from "react";
import './Tweets.css';
const Tweets = ({tweet,img}) => {
  return (
    <div className="border p-3 flex gap-3 items-center">
      <img className="rounded-full" src={img} alt="" />
      <span>{tweet}</span>
    </div>
  );
};

export default Tweets;
