import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <article className="pb-7">
      <h1 className="text-2xl">
        ${van.price}.00
        <span className="font-light text-base">/day</span>
      </h1>
    </article>
  );
};

export default HostVanPricing;
