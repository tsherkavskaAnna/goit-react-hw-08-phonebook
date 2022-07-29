import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
  }