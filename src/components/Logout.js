import { useNavigate } from "react-router-dom";
import { actionLogin } from "../actions/actionLogin";
import { useDispatch } from "react-redux"

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const hanldeLogout = () => {
        dispatch(actionLogin(null));
        navigate('/login');
    };

    return (
        <span className="cursor-pointer" onClick={hanldeLogout}>Logout</span>
    )
}

export default Logout;