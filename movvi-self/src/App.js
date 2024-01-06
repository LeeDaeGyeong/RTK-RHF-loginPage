import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { worker } from "./__mock__/browser";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  return <RouterProvider router={router} />;
}

export default App;
