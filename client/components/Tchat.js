import React, { useCallback, useEffect, useState } from "react";
import SocketIOClient from "socket.io-client";
import SimpleBar from "simplebar-react";

import { useScrollBottom } from "../hooks";
import Message from "./Message";

const ENDPOINT = "localhost:8080";

const Tchat = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const [ref, scrollBottom] = useScrollBottom();

  const addMessage = useCallback(
    (msg, perso = false) => {
      messages.push({ datetime: new Date(), content: msg, perso });
      setMessages([...messages]);
    },
    [messages]
  );

  useEffect(scrollBottom, [messages]);

  useEffect(() => {
    setSocket(SocketIOClient(ENDPOINT));

    if (socket) return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (socket)
      socket.on("join", (msg) => {
        console.log("join", msg);
        addMessage(msg);
      });
  }, [socket]);

  const send = () => {
    if (socket) {
      socket.emit("join", query);
      addMessage(query, true);
      setQuery("");
    }
  };

  return (
    <div className="bg-gray-100 shadow border max-w-600  w-full px-2 pt-2 rounded">
      <div className="flex justify-between">
        <div className="flex">
          <input
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            className="border-2 border-gray-400 focus:border-green-500 transition duration-150 px-2 py-1 rounded "
          />
          <button
            onClick={send}
            className="disabled: mx-2 select-none border-2 border-green-400 px-4 py-0.5 hover:bg-green-400 ring-offset-2 ring-green-400 focus:ring-2 transition shadow-md rounded-md text-lg font-semibold"
          >
            Envoyez
          </button>
          <button
            onClick={() => setMessages([])}
            className="disabled: mx-2 select-none border-2 border-green-400 px-4 py-0.5 hover:bg-green-400 ring-offset-2 ring-green-400 focus:ring-2 transition shadow-md rounded-md text-lg font-semibold"
          >
            clear
          </button>
        </div>
      </div>
      <div className="border shadow bg-white my-2">
        <h2 className="text-center font-bold text-lg border-b py-1">
          Message reçu
        </h2>
        <div className="px-2 py-1">
          <SimpleBar className="max-h-400">
            {messages.map((message, index) => (
              <Message key={index} {...message} />
            ))}
            <div ref={ref} />
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default Tchat;
