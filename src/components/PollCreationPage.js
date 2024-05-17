import { connect } from "react-redux";
import "../css/poll-creation.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const PollCreationPage = ({ dispatch }) => {
    const navigate = useNavigate();
    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const handleOptionOneChange = (e) => {
        const text = e.target.value;
        setOptionOneText(text);
    };

    const handleOptionTwoChange = (e) => {
        const text = e.target.value;
        setOptionTwoText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestion(optionOneText, optionTwoText));

        setOptionOneText("");
        setOptionTwoText("");

        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="center mb-10">Would You Rather</h3>
            <div className="center create-your-own-poll color-gray">Create Your Own Poll</div>
            <div className="mb-10">
                <label>
                    <div className="center mb-10"><b>First Option</b></div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Option One"
                        value={optionOneText}
                        onChange={handleOptionOneChange} />
                </label>
            </div>
            <div className="mb-10">
                <label>
                    <div className="center mb-10"><b>Second Option</b></div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Option Two"
                        value={optionTwoText}
                        onChange={handleOptionTwoChange} />
                </label>
            </div>
            <div className="center">
                <button type="submit" className="btn">Submit</button>
            </div>
        </form >
    )
};


export default connect()(PollCreationPage);