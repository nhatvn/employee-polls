import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

const QuestionPage = ({ questions, isShowDone }) => {
    return (
        <div>
            <div className="box-border box-content">
                <h3 className="box-border p-15 center m-0 box-title">{isShowDone ? 'Done' : 'New Questions'}</h3>
                <LoadingBar />
                <div className="row p-15 pb-0">
                    {questions && questions.map((item) => (
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
        </div>
    )
};

export default QuestionPage;