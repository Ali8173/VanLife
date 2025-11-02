import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { van } = useOutletContext();
  return (
    <article className="flex flex-col gap-2 mt-4">
      <h2>
        <span className="font-semibold">Name: </span>
        {van.name}
      </h2>
      <h2>
        <span className="font-semibold">Category: </span>
        {van.type}
      </h2>

      <span>
        <h2 className="inline font-semibold">Description: </h2>
        <p className="inline">{van.description}</p>
      </span>
      <h2>
        <span className="font-semibold">Visibility: </span>
        Public
      </h2>
    </article>
  );
};

export default HostVanInfo;
