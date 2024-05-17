import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

describe('_saveQuestion', () => {
    it('will return the new question object', async () => {
        const author = 'sarahedo';
        const optionOneText = 'option one';
        const optionTwoText = 'option two';
        var result = await _saveQuestion({
            author,
            optionOneText,
            optionTwoText
        });

        expect(result).toEqual({
            id: expect.any(String),
            timestamp: expect.any(Number),
            author: author,
            optionOne: {
                votes: [],
                text: optionOneText
            },
            optionTwo: {
                votes: [],
                text: optionTwoText
            }
        });
    })

    it('will throw error: Please provide optionOneText, optionTwoText, and author', async () => {
        const optionOneText = 'option one';
        const optionTwoText = 'option two';

        await expect(_saveQuestion({
            optionOneText,
            optionTwoText
        })).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    })
})

describe('_saveQuestionAnswer', () => {
    it('will return the new question object', async () => {
        const authedUser = 'sarahedo';
        const qid = 'loxhs1bqm25b708cmbf3g';
        const answer = 'optionTwo';
        var result = await _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        });

        expect(result).toEqual(true);
    })

    it('will throw error: Please provide authedUser, qid, and answer', async () => {
        const qid = 'loxhs1bqm25b708cmbf3g';
        const answer = 'optionTwo';

        await expect(_saveQuestionAnswer({
            qid,
            answer
        })).rejects.toEqual('Please provide authedUser, qid, and answer');
    })
})