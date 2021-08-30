import Head from "next/head";
import Tchat from "../components/Tchat";

const Home = () => {
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

      <main className="p-5 flex justify-around">
        <Tchat />
      </main>
    </div>
  );
};

export default Home;
