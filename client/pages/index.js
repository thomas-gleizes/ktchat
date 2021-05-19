import Head from "next/head";
import io from "socket.io-client";

let socket;

const Home = () => {
  const ENDPOINT = "localhost:8080";

  const handleConnect = async () => {
    socket = io(ENDPOINT);

    socket.emit("join", { value: "cest un test" });

    socket.on("join", (msg) => {
      console.log("recu", msg);
    });
    console.log(socket);
  };

  return (
    <div>
      <Head>
        <title>Socket.io tchat</title>
      </Head>
      <header className="w-full py-2 px-5 shadow-md bg-green-500">
        <div className="h-full my-auto">
          <h1 className="select-none text-white text-2xl ml-5 font-bold">
            Socket.io
          </h1>
        </div>
      </header>

      <main className="p-5">
        <div>
          <button
            onClick={handleConnect}
            className="mx-2 select-none border-2 border-green-400 px-4 py-0.5 hover:bg-green-400 ring-offset-2 ring-green-400 focus:ring-2 transition shadow-md rounded-md text-lg font-semibold"
          >
            Start
          </button>
          <button
            onClick={null}
            className="mx-2 select-none border-2 border-green-400 px-4 py-0.5 hover:bg-green-400 ring-offset-2 ring-green-400 focus:ring-2 transition shadow-md rounded-md text-lg font-semibold"
          >
            End
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
