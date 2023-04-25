import React from "react";
import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/data">Data</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Root;
