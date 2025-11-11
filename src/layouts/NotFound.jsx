import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 bg-orange-50 px-6 h-[80vh]">
      <h1 className="font-semibold text-4xl">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to="/"
        className="bg-black py-4 rounded-md w-full text-white text-center"
      >
        Return to home
      </Link>
    </section>
  );
};

export default NotFound;
