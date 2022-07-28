import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

export default function PublicRoute({children}) {
    const isLogIn = useSelector(authSelectors.getIsLogIn);
    return isLogIn ? <Navigate to="/contacts" /> : children;
}