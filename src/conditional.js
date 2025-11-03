import React from "react";

export const getVanStyle = (type) => {
  return {
    "bg-green-700": type === "rugged",
    "bg-orange-500": type === "simple",
    "bg-black": type === "luxury",
  };
};
