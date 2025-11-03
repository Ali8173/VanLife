import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Vans from "./layouts/Vanspage/Vans";
import VanDetail from "./layouts/Vanspage/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./layouts/Host/Dashboard";
import Income from "./layouts/Host/Income";
import Reviews from "./layouts/host/Reviews";
import HostVans from "./layouts/host/HostVans";
import HostVanDetails from "./layouts/host/HostVansDetails";
import HostLayout from "./components/HostLayout";
import HostVanPricing from "./layouts/host/HostVanPricing";
import HostVanInfo from "./layouts/host/HostVanInfo";
import HostVanPhotos from "./layouts/host/HostVanPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="HostVans" element={<HostVans />} />
            <Route path="HostVans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="HostVanPhotos" element={<HostVanPhotos />} />
              <Route path="HostVanPricing" element={<HostVanPricing />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
