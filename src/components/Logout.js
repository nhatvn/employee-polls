import { useNavigate } from "react-router-dom";
import { actionLogin } from "../actions/actionLogin";
import { connect } from "react-redux";

const Logout = ({ dispatch }) => {
    const navigate = useNavigate();

    const hanldeLogout = () => {
        dispatch(actionLogin(null));
        navigate('/login');
    };

    return (
        <span className="cursor-pointer" onClick={hanldeLogout}>Logout</span>
    )
}

export default connect()(Logout);