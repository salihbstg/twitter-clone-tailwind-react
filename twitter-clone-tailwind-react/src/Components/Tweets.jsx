import React from "react";

const Tweets = ({tweet}) => {
  return (
    <div className="border-2 p-3">
      <span>{tweet}</span>
    </div>
  );
};

export default Tweets;
