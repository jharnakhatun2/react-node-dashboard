import { useNavigate } from "react-router";
import { useAuth } from "../../components/Context/AuthProvider";
import Loader from "../../util/Loader/Loader";

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const {user, loading} = useAuth();

    if(!user){
        navigate('/');
    }

    if(loading){
        return <Loader/>
    }
    
  return children;
};

export default PrivateRoute;
