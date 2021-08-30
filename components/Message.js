import React from "react";

import { useClock } from "../hooks";

const Message = ({ datetime, content, perso }) => {
  const time = useClock(datetime);

  return (
    <>
      {perso ? (
        <div className="flex justify-end text-right">
          <div className="rounded border bg-gray-200 shadow text-black w-3/5 mx-1 my-2 px-2 py-1">
            <span className="text-xs">{time}</span>
            <div>{content}</div>
          </div>
        </div>
      ) : (
        <div className="flex justify-start text-left">
          <div className="rounded border bg-green-500 shadow text-white w-3/5 mx-1 my-2 px-2 py-1">
            <span className="text-xs">{time}</span>
            <div>{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
