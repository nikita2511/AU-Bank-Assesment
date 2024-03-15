import React from "react";
import { routes } from "./util/constants";
import { Route, Routes } from "react-router-dom";

export default function Routes() {
  return (
    <Routes location={location}>
      <Route
        exact
        path={routes.ADMIN_DASHBOARD}
        element={<AdminDashboard location={location} />}
      />
    </Routes>
  );
}
