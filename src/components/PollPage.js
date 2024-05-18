import { connect } from "react-redux";
import "../css/poll.css"
import { getImages, withRouter } from "../utils/helpers";
import { OPTION_ONE, OPTION_TWO, handleAddQuestionAnswer } from "../actions/questions";
import { IoIosCheckmarkCircle } from "react-icons/io";
import LoadingBar from "react-redux-loading-bar";
import NotFoundPage from "./NotFoundPage";

const PollPage = ({ dispatch, question, author, answered }) => {
    const handleClick = (answer) => {
        dispatch(handleAddQuestionAnswer({
            qid: question.id,
            answer
        }));
    };

    if (!question) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <div>
            <LoadingBar />
            <h3 className="center">{question.author}</h3>
            <p>
                <img src={getImages(author?.avatarURL)} alt="User Avatar" className="poll-avatar" />
            </p>
            {answered ? null : (
                <h3 className="center">Would You Rather</h3>
            )}
            <div className="row">
                <div className="col-6">
                    <div className={"box-border box-question" + (answered === OPTION_ONE ? ' poll-selected' : '')}>
                        <div className="p-15">
                            <div>{question.optionOne.text} {answered === OPTION_ONE ? <IoIosCheckmarkCircle className="checkmark-circle-selected" /> : null}</div>
                        </div>
                        {answered ? <div className="box-answered">{question.optionOne.votes.length} ({question.optionOne.percentage.toFixed(2)}%)</div>
                            : <button type="button" className="btn btn-poll-click" onClick={() => handleClick(OPTION_ONE)}>Click</button>
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className={"box-border box-question" + (answered === OPTION_TWO ? ' poll-selected' : '')}>
                        <div className="p-15">
                            <div>{question.optionTwo.text}  {answered === OPTION_TWO ? <IoIosCheckmarkCircle className="checkmark-circle-selected" /> : null}</div>
                        </div>
                        {answered ? <div className="box-answered">{question.optionTwo.votes.length} ({question.optionTwo.percentage.toFixed(2)}%)</div>
                            : <button type="button" className="btn btn-poll-click" onClick={() => handleClick(OPTION_TWO)}>Click</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
    const { id } = props.router.params;
    const question = questions[id];
    let author = null;
    let answered = null;

    if (question) {
        answered = (question.optionOne.votes.includes(authedUser) && OPTION_ONE)
            || (question.optionTwo.votes.includes(authedUser) && OPTION_TWO);
        author = users[question.author];

        if (answered) {
            const optionOneCount = question.optionOne.votes.length;
            const optionTwoCount = question.optionTwo.votes.length
            const total = question.optionOne.votes.length + question.optionTwo.votes.length;
            question.optionOne.percentage = optionOneCount / total * 100;
            question.optionTwo.percentage = optionTwoCount / total * 100;
        }
    }

    return {
        question,
        author,
        answered
    };
};

export default withRouter(connect(mapStateToProps)(PollPage));