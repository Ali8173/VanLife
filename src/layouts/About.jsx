import React from "react";

import bgImg from "../assets/about-hero.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container">
      <img src={bgImg} className="about-hero-image" />
      <article className="flex flex-col gap-6 px-8 py-7">
        <h1 className="font-bold text-4xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="flex flex-col gap-8 bg-orange-200 p-7 rounded">
          <h2 className="font-bold text-3xl">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link
            className="bg-black p-3 rounded-md max-w-fit text-white"
            to="/vans"
          >
            Explore our vans
          </Link>
        </div>
      </article>
    </section>
  );
};

export default About;
