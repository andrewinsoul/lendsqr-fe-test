import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../common/navbar";
import { Sidebar } from "../common/sidebar";
import { Dashboard } from "../screens/dashboard";
import { Login } from "../screens/login";
import { Lost } from "../screens/lost";
import { WorkInProgress } from "../screens/workInProgress";
import { AuthenticatedRoute } from "./protectRoutes";

let authenticated: boolean;
const unAuthenticatedPaths = ["/login"];

export const Paths = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      authenticated = true;
      navigate("/auth/dashboard");
    } else {
      authenticated = false;
    }
  }, []);
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div className="work-sans">
      {!unAuthenticatedPaths.includes(pathname) ? (
        <>
          <Navbar toggleMenu={toggleMenu} />
          <Sidebar open={open} toggleMenu={toggleMenu} />
        </>
      ) : null}
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route
          path="/auth"
          element={<AuthenticatedRoute authenticated={authenticated} />}
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="in-progress" element={<WorkInProgress />} />
        </Route>
        <Route path="/*" element={<Lost />} />
      </Routes>
    </div>
  );
};
