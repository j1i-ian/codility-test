import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './12-count-div.js';

describe('11 count div', () => {
    describe('solution test', () => {
        [
            {
                givenValue: {
                    start: 6,
                    end: 11,
                    devidedBy: 2
                },
                expectedValue: 3
            },
            {
                givenValue: {
                    start: 11,
                    end: 345,
                    devidedBy: 17
                },
                expectedValue: 20
            },
            {
                givenValue: {
                    start: 10,
                    end: 30,
                    devidedBy: 10
                },
                expectedValue: 3
            },
            {
                givenValue: {
                    start: 11,
                    end: 11,
                    devidedBy: 11
                },
                expectedValue: 1
            },
            {
                givenValue: {
                    start: 10,
                    end: 10,
                    devidedBy: 5
                },
                expectedValue: 1
            },
            {
                givenValue: {
                    start: 10,
                    end: 10,
                    devidedBy: 7
                },
                expectedValue: 0
            },
            {
                givenValue: {
                    start: 10,
                    end: 10,
                    devidedBy: 20
                },
                expectedValue: 0
            },
            {
                givenValue: {
                    start: 0,
                    end: 0,
                    devidedBy: 11
                },
                expectedValue: 1
            },
            {
                givenValue: {
                    start: 0,
                    end: 1000000,
                    devidedBy: 1
                },
                expectedValue: 1000001
            }
        ].forEach(function ({ givenValue, expectedValue }) {
            it(`should be passed: value is given ${JSON.stringify(
                givenValue
            )}, expected: [${expectedValue}]`, function () {
                const { start, end, devidedBy } = givenValue;
                const actual = solution(start, end, devidedBy);
                expect(actual).equals(expectedValue);
            });
        });
    });
});
