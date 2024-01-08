import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import { worker } from "./__mock__/browser";
import { store } from "./store/store";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
