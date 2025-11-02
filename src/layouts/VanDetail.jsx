import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getVanStyle } from "./conditional";
import "../server";

import clsx from "clsx";

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className="">
      <main className="p-5">
        {van ? (
          <article className="flex flex-col justify-center">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="mx-auto mb-4 rounded max-h-[70vh]"
            />
            <p
              className={clsx(
                "px-3 py-0.5 rounded w-fit text-white capitalize",
                getVanStyle(van?.type)
              )}
            >
              {van.type}
            </p>
            <h2 className="mt-4 mb-4 font-bold text-3xl capitalize">
              {van.name}
            </h2>
            <p>
              <span className="font-medium text-xl">${van.price}</span>
              /day
            </p>
            <p className="mt-4 leading-relaxed">{van.description}</p>
            <button className="bg-orange-400 mt-4 py-3 rounded-md text-white text-xl">
              Rent this van
            </button>
          </article>
        ) : (
          <h2>Loading...</h2>
        )}
      </main>
    </section>
  );
};

export default VanDetail;
