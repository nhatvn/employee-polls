import { connect } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = ({ authedUser }) => {
    const location = useLocation();

    if (!authedUser) {
        return <Navigate to="/login" replace state={{ path: location.pathname }} />;
    }

    return <Outlet />;
};

const mapStateToProps = ({ authedUser }) => ({
    authedUser
});

export default connect(mapStateToProps)(AuthRoute);