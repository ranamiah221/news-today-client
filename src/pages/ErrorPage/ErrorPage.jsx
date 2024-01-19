import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="text-center mt-52" id="error-page">
      <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-xl font-semibold text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
