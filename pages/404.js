import { useState, useContext } from "react";
import Navbar from "../components/navbar";
import Client from "../components/contentFul";

import Footer from "../components/footer";

import { useAppContext } from "../components/context";
import { useEffect } from "react/cjs/react.development";

const Page404 = (props) => {
  console.log("props", props);

  return (
    <>
      <Navbar />

      <div className="page404" id="page404">
        <div className="container404">
          <h1>Page introuvable...</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
