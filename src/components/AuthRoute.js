import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = ({ authedUser }) => {
    if (!authedUser) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

const mapStateToProps = ({ authedUser }) => ({
    authedUser
});

export default connect(mapStateToProps)(AuthRoute);