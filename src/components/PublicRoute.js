import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const onNavigate = isLoggedIn && restricted;
  return onNavigate ? (
    <Navigate to={redirectTo} replace={true} />
  ) : (
    children
  );
}