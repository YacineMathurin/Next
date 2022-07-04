import { useRouter } from "next/router";
import React from "react";

const Jumbotron = () => {
  const router = useRouter();
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4">Cats world</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/restaurants")}
        >
          Start looking
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
