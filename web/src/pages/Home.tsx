import React from "react";

const Home: Page = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 py-5">
      <div className="w-650 h-800 mx-auto border border-gray-300 rounded-lg shadow-xl bg-white">
        <SideBar />
        <div></div>
      </div>
    </div>
  );
};

const SideBar: Component = () => {
  return (
    <div className="h-full w-sidebar rounded-l-lg bg-stone-100 ">
      <div className="flex flex-col">
        <div></div>
      </div>
    </div>
  );
};

export default Home;
