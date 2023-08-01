import { useRouterError } from "react-router-dom";

const Error = () => {
  const err = useRouterError();
  return (
    <>
      <h2>{err}</h2>
      <p>{err.status + " " + err.statusText}</p>
    </>
  );
};

export default Error;
