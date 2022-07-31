import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "redux/auth";

const PublicRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate replace to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;