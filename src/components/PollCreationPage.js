import { useDispatch } from "react-redux";
import "../css/poll-creation.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const PollCreationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [optionOneText, setOptionOneText] = useState('');
    const [optionOneValidate, setOptionOneValidate] = useState('');
    const [optionTwoText, setOptionTwoText] = useState('');
    const [optionTwoValidate, setOptionTwoValidate] = useState('');

    const handleOptionOneChange = (e) => {
        const text = e.target.value.trim();
        setOptionOneText(text);

        if (text !== '') {
            setOptionOneValidate('');
        }
    };

    const handleOptionTwoChange = (e) => {
        const text = e.target.value.trim();

        if (text !== '') {
            setOptionTwoValidate('');
        }
        setOptionTwoText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (optionOneText === '') {
            isValid = false;
            setOptionOneValidate('Option One is required.');
        }

        if (optionTwoText === '') {
            isValid = false;
            setOptionTwoValidate('Option Two is required.');
        }

        if (isValid) {
            dispatch(handleAddQuestion(optionOneText, optionTwoText));

            setOptionOneText('');
            setOptionTwoText('');

            navigate("/");
        }
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
                    <div className="text-danger">{optionOneValidate}</div>
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
                    <div className="text-danger">{optionTwoValidate}</div>
                </label>
            </div>
            <div className="center">
                <button type="submit" className="btn">Submit</button>
            </div>
        </form >
    )
};


export default PollCreationPage;