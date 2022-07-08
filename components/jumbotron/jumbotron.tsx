import { useRouter } from "next/router";
import React from "react";

const Jumbotron = () => {
  const router = useRouter();
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4" data-testid="title">
          Visit French lands
        </h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <button
          data-testid="btn-next-page"
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/restaurants")}
        >
          Start looking
        </button>
        <button
          data-testid="btn-next-page"
          type="button"
          className="btn btn-dark mx-3"
          onClick={() => router.push(`/restaurants/add`)}
        >
          Add restaurant
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
