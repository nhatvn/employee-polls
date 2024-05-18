import { _getQuestions, _getUsers } from "../utils/_DATA";
import { formatDate, objectToArray } from '../utils/helpers'

describe('objectToArray', () => {
    it('input object will return the array', () => {
        var result = objectToArray({});

        expect(result).toEqual([]);
    })
})

describe('formatDate', () => {
    it('input object will return the array', () => {
        var result = formatDate(1489579767190);

        expect(result).toEqual('7:09:PM | 3/15/2017');
    })

    it('input object will return null', () => {
        var result = formatDate(null);

        expect(result).toEqual('');
    })
})