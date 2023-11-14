import React, { useState } from "react";
import Tweets from "./Tweets";
const Main = () => {
  const [tweets, setTweets] = useState([]);
  return (
    <div className="border-white border-2 w-4/5">
      <form
        className="!min-w-full"
        onSubmit={(event) => {
          event.preventDefault();
          setTweets((a) => [...a, document.querySelector("#tweet").value]);
        }}
      >
        <textarea
          type="textarea"
          id="tweet"
          className="bg-gray-400 mx-auto w-full py-2 px-3 h-36 text-black font-bold"
        />
        <div className="w-full flex justify-end p-5"><button className="px-6 py-3 w-30 bg-white text-black" type="submit">Tweet</button></div>
      </form>
      <div className="flex flex-col border-solid gap-3 border-white border-2">
        {tweets.map((data, index) => (
          <Tweets tweet={data} key={index}></Tweets>
        ))}
      </div>
    </div>
  );
};

export default Main;
