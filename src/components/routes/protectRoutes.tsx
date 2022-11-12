import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthenticatedRoute: FC<{ authenticated: boolean }> = ({
  authenticated,
}) => {
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
