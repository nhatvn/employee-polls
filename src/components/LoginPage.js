import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actionLogin } from "../actions/actionLogin";
import userGroup from "../images/user-group.png"
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData, handleInitialDataAfterLogin } from "../actions/shared";
import { objectToArray } from "../utils/helpers";

const LoginPage = ({ dispatch, users }) => {
    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState("");
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        let user = users[e.target.value];
        setPassword(user.password);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = users[userName] && users[userName].password === password && users[userName];

        if (user) {
            dispatch(actionLogin(user.id));
            dispatch(handleInitialDataAfterLogin());
            navigate('/');
        }
        else {
            setWrongPassword("Password incorrect.");
        }
    };

    return (
        <div>
            {!users || Object.keys(users).length === 0 ? <LoadingBar /> : (
                <form onSubmit={handleSubmit} data-testid="loginForm">
                    <h3 className="center">Employee Polls</h3>
                    <img src={userGroup} alt="User Avatar" className="user-group" />
                    <h3 className="center">Log In</h3>
                    <div className="mb-10">
                        <label>
                            <div className="center mb-10">User</div>
                            <select onChange={handleUserNameChange}
                                className="form-control"
                                defaultValue=""
                                data-testid="userSelect">
                                <option value="" className="d-none" disabled>User</option>
                                {
                                    objectToArray(users).map((user) => (
                                        <option value={user.id} key={user.id}>{user.id}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </div>
                    <div className="mb-10">
                        <label>
                            <div className="center mb-10">Password</div>
                            <input
                                type="password"
                                name="Password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange} />
                        </label>
                    </div>
                    <div className="text-danger" data-testid="wrongPassword">{wrongPassword}</div>
                    <div className="center">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            )}
        </div>
    )
};

const mapStateToProps = ({ users }) => ({
    users
});

export default connect(mapStateToProps)(LoginPage);