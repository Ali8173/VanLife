import React from "react";
import { useRouteError } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section>
      <Navbar />
      <main className="flex flex-col justify-center items-center bg-red-200 h-[80vh]">
        <h1 className="text-red-700 text-3xl">
          Error: <span> '{error.message}'</span>
        </h1>
        <p className="text-red-700 text-2xl">Status: {error.status}</p>
      </main>
      <Footer />
    </section>
  );
};

export default Error;
