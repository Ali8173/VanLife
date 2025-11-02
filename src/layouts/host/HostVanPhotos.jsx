import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <article className="pb-4">
      <img className="rounded h-25" src={van.imageUrl} alt={van.name} />
    </article>
  );
};

export default HostVanPhotos;
