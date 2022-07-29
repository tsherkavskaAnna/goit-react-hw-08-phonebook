import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";
import { Outlet} from "react-router-dom";

export default function PublicRoute() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return <>{isLoggedIn ? <Navigate to="/" /> : <Outlet />}</>;
  }