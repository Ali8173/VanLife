import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./layouts/Home";
import About from "./layouts/About";
import Vans, { loader as vansLoader } from "./layouts/Vanspage/Vans";
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
import NotFound from "./layouts/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
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
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
