import React from "react";
import "../server";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { getVanStyle } from "./conditional";

const Vans = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);

  return (
    <section>
      <main className="p-5">
        <h1 className="block mb-4 font-semibold text-3xl">
          Explore our van options
        </h1>
        <article className="flex flex-wrap gap-4">
          {data.map((van) => {
            return (
              <Link className="max-w-[30%]" key={van.id} to={`/vans/${van.id}`}>
                <img
                  className="rounded object-cover"
                  src={van.imageUrl}
                  alt={van.name}
                />
                <div className="flex flex-wrap justify-between mt-2 font-semibold tex-xl">
                  <h3>{van.name}</h3>
                  <h3>
                    ${van.price}
                    <div className="font-normal text-xs">/day</div>
                  </h3>
                </div>
                <span
                  className={clsx(
                    "px-2 py-1 rounded text-white capitalize",
                    getVanStyle(van.type)
                  )}
                >
                  {van.type}
                </span>
              </Link>
            );
          })}
        </article>
      </main>
    </section>
  );
};

export default Vans;
