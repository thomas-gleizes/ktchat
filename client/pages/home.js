import React from "react";

import Layout from "../components/layouts/Layout";
import Tchat from "../components/Tchat";

const Home = () => {
  return (
    <Layout className="p-5 flex justify-around">
      <Tchat />
    </Layout>
  );
};

export default Home;
