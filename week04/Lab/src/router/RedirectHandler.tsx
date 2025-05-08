import { Navigate } from "react-router";
export default function RedirectHandler() {
  const userId = localStorage.getItem("userId");

  return userId ? (
    <Navigate to="/mypage" replace />
  ) : (
    <Navigate to="/login" replace />
  );
}
