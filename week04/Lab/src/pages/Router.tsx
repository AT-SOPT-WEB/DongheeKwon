// Router.jsx

import { createBrowserRouter } from "react-router";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import MyPage from "./myPage/MyPage";
import MyPageInfo from "./myPage/myPageInfo/MyPageInfo";
import MyPageSearch from "./myPage/myPageSearch/MyPageSearch";

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
]);

export default router;
