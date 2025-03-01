import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../components/Context/AuthProvider";
import Loader from "../../util/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Redirect if user is not authenticated
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  // Show loader while checking authentication
  if (loading) {
    return <Loader />;
  }

  // Render children if user is authenticated
  return user ? children : null;
};

export default PrivateRoute;