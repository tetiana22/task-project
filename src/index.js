import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import { persistor } from "./redux/store";
import "modern-normalize";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/tetiana22/task-to">
        <PersistGate persistor={persistor} loading={null}>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
