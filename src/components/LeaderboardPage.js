import { connect } from "react-redux";
import "../css/leaderboard.css"
import { formatLeaderboard, getImages } from "../utils/helpers";

const LeaderboardPage = ({ leaderboardList }) => {
    return (
        <div className="table-wrap">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Users</th>
                        <th scope="col">Answered</th>
                        <th scope="col">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardList.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <div className="box-user-leaderboard">
                                    <img src={getImages(item.avatarURL)} alt="User Avatar" className="user-avatar-leaderboard" />
                                    <div>
                                        <h3 className="m-0">{item.name}</h3>
                                        <span className="color-gray">{item.id}</span>
                                    </div>
                                </div>
                            </td>
                            <td>{item.answered}</td>
                            <td>{item.created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
};

const mapStateToProps = ({ users, questions }) => ({
    leaderboardList: formatLeaderboard(users, questions).sort(
        (a, b) => {
            if (a.created === b.created) {
                return b.answered - a.answered;
            }

            return b.created - a.created;
        }
    )
});

export default connect(mapStateToProps)(LeaderboardPage);