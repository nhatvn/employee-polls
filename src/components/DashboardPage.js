import { connect } from "react-redux";
import "../css/dashboard.css"
import { objectToArray } from "../utils/helpers";
import QuestionPage from "./QuestionPage";
import { useState } from "react";

const DashboardPage = ({ newQuestions, doneQuestions }) => {
    const [isShowDone, setIsShowDone] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsShowDone(!isShowDone)}
                className="btn btn-success mb-10">
                {isShowDone ? 'New Questions' : 'Done'}
            </button>
            {isShowDone
                ? <QuestionPage questions={doneQuestions} isShowDone={isShowDone} />
                : <QuestionPage questions={newQuestions} isShowDone={isShowDone} />}
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