import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
interface IProps {
  redirectPath: string;
  children: React.ReactNode;
  login?: "login";
}

const ProtectedRoute = ({ login, redirectPath, children }: IProps) => {
  const [user] = useAuthState(auth);
  if (!login) {
    if (!user) {
      return <Navigate to={redirectPath} />;
    }
    return children;
  }
  if (login) {
    if (!user) {
      return children;
    }
    return <Navigate to={redirectPath} />;
  }
};

export default ProtectedRoute;
