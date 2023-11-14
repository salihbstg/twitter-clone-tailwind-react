import React from "react";
import './List.css';
const List = ({ icon, text }) => {
  return (
    <div className="flex gap-3 items-center w-50 me-10 rounded-xl p-3 cursor-pointer transition-all hover:bg-gray-500">
      <i className={`cursor-pointer ${icon}`}></i>
      <a href="#" className="font-bold">
        {text}
      </a>
    </div>
  );
};

export default List;
