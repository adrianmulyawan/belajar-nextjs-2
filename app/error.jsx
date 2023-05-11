"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Something Error</h1>
      <p>Check your console</p>
      <button onClick={ () => reset() }>Try Again</button>
    </>
  );
}

export default Error;
