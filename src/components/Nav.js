import { Link } from "react-router-dom";
import '../css/nav.css'
import { useSelector } from "react-redux";
import { getImages } from "../utils/helpers";
import Logout from "./Logout";

const Nav = () => {
    const user = useSelector(({ authedUser, users }) => users[authedUser]);

    return (
        <nav className="nav">
            {!user ? null : (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li>
                        <Link to="/add">New</Link>
                    </li>
                    <li className="nav-avatar-logout-box">
                        <img src={getImages(user.avatarURL)} alt="User" className="nav-avatar" />
                        <b>{user.id}</b>
                    </li>
                    <li className="pr-0"><Logout /></li>
                </ul>
            )}
        </nav>
    )
}

export default Nav;