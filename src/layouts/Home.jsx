import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/home-hero.png";

const Home = () => {
  return (
    <main className="">
      <section
        className="flex flex-col gap-7 bg-cover bg-center p-8 h-[80vh]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="font-bold text-white text-4xl">
          You got the travel plans, we got the travel Vans.
        </h1>
        <p className="text-white">
          Add adventure to your life by joining the #vanlif move make your
          perfect road trip
        </p>
        <Link
          className="bg-orange-400 py-3 rounded-md w-full text-white text-xl text-center"
          to="vans"
        >
          Find your van
        </Link>
      </section>
    </main>
  );
};

export default Home;
