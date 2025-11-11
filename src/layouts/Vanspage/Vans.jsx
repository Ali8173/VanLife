import React from "react";
import "../../server";
import { getVanStyle } from "../../conditional";
import { clsx } from "clsx";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

const Vans = () => {
  const vans = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  if (error) {
    return (
      <h1 className="flex justify-center items-center bg-red-100 h-[80vh] text-red-700">
        Error: {error.message || "Failed to load vans"}
      </h1>
    );
  }

  return (
    <section className="bg-orange-50 h-screen">
      <main className="p-5">
        <h1 className="block mb-4 font-semibold text-3xl">
          Explore our van options
        </h1>
        <nav className="flex justify-between gap-4 mb-7 w-fit">
          <button
            className={clsx(
              "bg-orange-100 hover:bg-orange-500 px-3 py-1 rounded hover:text-white",
              typeFilter === "simple" && "bg-orange-500 text-white"
            )}
            onClick={() => setSearchParams({ type: "simple" })}
          >
            Simple
          </button>
          <button
            className={twMerge(
              clsx(
                "bg-orange-100 hover:bg-black px-3 py-1 rounded hover:text-white",
                typeFilter === "luxury" && "bg-black text-white"
              )
            )}
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
          <button
            className={twMerge(
              clsx(
                "bg-orange-100 hover:bg-green-700 px-3 py-1 rounded hover:text-white",
                typeFilter === "rugged" && "bg-green-700 text-white"
              )
            )}
            onClick={() => setSearchParams({ type: "rugged" })}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              className="px-2 py-1 underline"
              onClick={() => setSearchParams({})}
            >
              Clear All
            </button>
          )}
        </nav>
        <article className="flex flex-wrap gap-4">
          {displayedVans.map((van) => {
            return (
              <Link
                className="max-w-[30%]"
                key={van.id}
                to={van.id}
                state={{ search: searchParams.toString(), type: typeFilter }}
              >
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
