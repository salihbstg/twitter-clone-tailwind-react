import React from "react";
import List from "./List/List";
import {Data} from "../Data/Menu";
const Left = () => {
    
  return (
    <div className="flex flex-col gap-5 mt-3 w-1/5">
      <i class="fa-brands fa-x-twitter fa-2x mb-1 cursor-pointer ps-3"></i>
      {Data.map((data,index)=>{
        return <List icon={data.icon} text={data.text} key={index}></List>
      })}
    </div>
  );
};

export default Left;
