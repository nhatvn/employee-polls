import { connect } from "react-redux";
import "../css/dashboard.css"
import { formatDate, objectToArray } from "../utils/helpers";
import { Link } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

const DashboardPage = ({ newQuestions, doneQuestions }) => {
    return (
        <div>
            <div className="box-border box-content">
                <h3 className="box-border p-15 center m-0 box-title">New Questions</h3>
                <LoadingBar />
                <div className="row p-15 pb-0">
                    {newQuestions && newQuestions.map((item) => (
                        <div className="col-3 mb-15" key={item.id}>
                            <div className="box-border">
                                <div className="p-15">
                                    <h4>{item.author}</h4>
                                    <p>{formatDate(item.timestamp)}</p>
                                </div>
                                <div className="separate-line"></div>
                                <div className="p-15">
                                    <Link to={`/questions/${item.id}`} className="box-border btn btn-home-show">Show</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="box-border box-content m-0">
                <h3 className="box-border p-15 center m-0 box-title">Done</h3>
                <LoadingBar />
                <div className="row p-15 pb-0">
                    {doneQuestions && doneQuestions.map((item) => (
                        <div className="col-3 mb-15" key={item.id}>
                            <div className="box-border">
                                <div className="p-15">
                                    <h4>{item.author}</h4>
                                    <p>{formatDate(item.timestamp)}</p>
                                </div>
                                <div className="separate-line"></div>
                                <div className="p-15">
                                    <Link to={`/questions/${item.id}`} className="box-border btn btn-home-show">Show</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
};

const mapStateToProps = ({ authedUser, questions }) => {
    const questionList = objectToArray(questions)
    const newQuestions = questionList.filter((item) => {
        return !item.optionOne.votes.includes(authedUser)
            && !item.optionTwo.votes.includes(authedUser);
    });
    const doneQuestions = questionList.filter((item) => {
        return item.optionOne.votes.includes(authedUser)
            || item.optionTwo.votes.includes(authedUser);
    });
    return {
        newQuestions: newQuestions.sort(
            (a, b) => b.timestamp - a.timestamp
        ),
        doneQuestions: doneQuestions.sort(
            (a, b) => b.timestamp - a.timestamp
        ),
    }
};

export default connect(mapStateToProps)(DashboardPage);