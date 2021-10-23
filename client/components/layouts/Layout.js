import React from "react";
import Head from "next/head";

const Layout = ({ children, ...props }) => {
  return (
    <>
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
      <main {...props}>{children}</main>
    </>
  );
};

export default Layout;
