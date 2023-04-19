import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ApolloProvider } from "@apollo/client";
import client from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App bg-gray-900">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          draggable
        />
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  );
}

export default App;
