import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

export default function PrivateRoute({ children }) {
    const isLogIn = useSelector(authSelectors.getIsLogIn);
    return isLogIn ? children : <Navigate to="/" />
}