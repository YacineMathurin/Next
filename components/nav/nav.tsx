import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
          className="navbar-brand mb-0 h1"
        >
          Navbar
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
