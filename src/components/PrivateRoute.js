import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, authedUser }) => {
  const location = useLocation();
  if (!authedUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
