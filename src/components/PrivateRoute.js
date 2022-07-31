import { useSelector } from "react-redux";
import { Navigate , Outlet} from "react-router-dom";
import { authSelectors } from "redux/auth";

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;