import { RouterProvider } from "react-router";
import router from "./pages/Router";
import "./styles/reset.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
