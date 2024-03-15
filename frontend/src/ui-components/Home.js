import React from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../util/constants";

export default function Home() {
  return (
    <>
      <Navigate to={routes.ADMIN_DASHBOARD} />
    </>
  );
}
