import React from "react";
import { routes } from "./util/constants";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminDashboard from "./ui-components/dashboard/AdminDashboard";
import Home from "./ui-components/Home";
import PageNotFound from "./ui-components/PageNotFound";

export default function NavRoutes() {
  let location = useLocation();
  return (
    <Routes location={location}>
      <Route exact path={routes.HOME} element={<Home />} />
      <Route
        exact
        path={routes.ADMIN_DASHBOARD}
        element={<AdminDashboard location={location} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
