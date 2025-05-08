import { RouterProvider } from "react-router";
import router from "./router/Router";
import "./styles/reset.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
