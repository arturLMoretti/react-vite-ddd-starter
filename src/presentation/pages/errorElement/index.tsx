import { ErrorResponse, useRouteError } from "react-router-dom";

const ErrorFallback = () => {
  const error = useRouteError() as ErrorResponse;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Algo deu errado!</h1>
      {error ? <p className="text-red-500 text-lg mb-4">{error.data}</p> : null}
      <p className="text-lg mb-4">
        Por favor, tente novamente ou entre em contato com o suporte.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Atualizar página
      </button>
    </div>
  );
};

export default ErrorFallback;
