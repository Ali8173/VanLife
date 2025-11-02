import React from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  return (
    <section className="bg-orange-50 p-5">
      <h1 className="pb-4 font-bold text-3xl">Your listed vans</h1>
      {hostVans.length > 0 ? (
        <article className="flex flex-col gap-4 pb-12">
          {hostVans.map((hostVan) => {
            return (
              <Link key={hostVan.id} to={`/host/hostvans/${hostVan.id}`}>
                <div className="flex gap-4 bg-white shadow p-4 rounded">
                  <img
                    className="rounded h-20"
                    src={hostVan.imageUrl}
                    alt={hostVan.name}
                  />
                  <div className="mt-2">
                    <h3 className="font-semibold text-xl">{hostVan.name}</h3>
                    <p>${hostVan.price}/day</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </article>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default HostVans;
