import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ AllowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
 
  return (
    auth?.accessToken
      ? !AllowedRoles||AllowedRoles?.includes(auth?.role)
        ? <Outlet />
        : <Navigate to="/Unauthorized" state={{ from: location }} replace />
      : <Navigate to="/Login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
