import React from "react";
import "../../server";
import { getVanStyle } from "../../conditional";
import { clsx } from "clsx";
import { Link, useSearchParams, NavLink } from "react-router-dom";
import {} from "react-router-dom";

const Vans = () => {
  const [data, setData] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? data.filter((van) => van.type === typeFilter)
    : data;
  console.log(typeFilter);

  return (
    <section>
      <main className="p-5">
        <h1 className="block mb-4 font-semibold text-3xl">
          Explore our van options
        </h1>
        <nav className="flex justify-between mb-7 max-w-[70%]">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 text-white rounded px-3 py-1 "
                : "bg-orange-100 hover:bg-orange-500 px-3 py-1 rounded hover:text-white"
            }
            to="?type=simple"
          >
            Simple
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white rounded px-3 py-1 "
                : "bg-orange-100 hover:bg-black px-3 py-1 rounded hover:text-white"
            }
            to="?type=luxury"
          >
            Luxury
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-green-700 text-white rounded px-3 py-1 "
                : "bg-orange-100 hover:bg-green-700 px-3 py-1 rounded hover:text-white"
            }
            to="?type=rugged"
          >
            Rugged
          </NavLink>
          <Link className="px-2 py-1 underline" to=".">
            Clear All
          </Link>
        </nav>
        <article className="flex flex-wrap gap-4">
          {displayedVans.map((van) => {
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
