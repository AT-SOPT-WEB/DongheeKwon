import { createBrowserRouter } from "react-router";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import MyPage from "../pages/myPage/MyPage";
import MyPageInfo from "../pages/myPage/myPageInfo/MyPageInfo";
import MyPageSearch from "../pages/myPage/myPageSearch/MyPageSearch";
import RedirectHandler from "./RedirectHandler";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/signup", element: <Signup /> },
  {
    path: "/mypage",
    element: <MyPage />,
    children: [
      {
        path: "info",
        element: <MyPageInfo />,
      },
      { path: "search", element: <MyPageSearch /> },
    ],
  },
  {
    path: "*",
    element: <RedirectHandler />,
  },
]);

export default router;
