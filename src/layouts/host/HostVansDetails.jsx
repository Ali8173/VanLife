import React from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import clsx from "clsx";
import { getVanStyle } from "../conditional";

const HostVanDetails = () => {
  const [van, setVan] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className="bg-orange-50 px-6 pt-5 pb-20">
      <Link to=".." relative="path" className="font-light underline">
        ← Back to all vans
      </Link>
      {van ? (
        <main className="bg-white mt-4 p-4 rounded">
          <div className="flex gap-6">
            <img className="rounded h-35" src={van.imageUrl} alt={van.name} />
            <div className="flex flex-col gap-1.5 mt-3">
              <h2
                className={clsx(
                  "px-3 py-0.5 rounded w-fit text-white capitalize",
                  getVanStyle(van?.type)
                )}
              >
                {van.type}
              </h2>
              <p className="font-semibold text-2xl">{van.name}</p>
              <p>
                <span className="font-semibold text-xl">${van.price}</span>/day
              </p>
            </div>
          </div>
          <nav className="flex justify-between my-4 max-w-[50%]">
            <NavLink
              to="."
              className={({ isActive }) =>
                isActive ? "font-bold underline text-black" : ""
              }
              end
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline text-black" : ""
              }
              to="HostVanPricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline text-black" : ""
              }
              to="HostVanPhotos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </main>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default HostVanDetails;
