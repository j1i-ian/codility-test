import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './09-max-counters.js';

describe('09 counting elements', () => {
    describe('solution test', () => {
        [
            {
                givenValue: {
                    desireLength: 5,
                    arr: [3, 4, 4, 6, 1, 4, 4]
                },
                expectedValue: [3, 2, 2, 4, 2]
            },
            {
                givenValue: {
                    desireLength: 3,
                    arr: [1, 3, 1, 4]
                },
                expectedValue: [2, 2, 2]
            },
            {
                givenValue: {
                    desireLength: 7,
                    arr: [3, 6, 4, 6, 6, 1, 3, 1, 1, 1, 1, 4, 4]
                },
                expectedValue: [5, 0, 2, 3, 0, 3, 0]
            },
            {
                givenValue: {
                    desireLength: 6,
                    arr: [3, 2, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7]
                },
                expectedValue: [9, 9, 9, 9, 9, 9]
            }
        ].forEach(function ({ givenValue, expectedValue }) {
            it(`should be passed: value is given ${JSON.stringify(
                givenValue
            )}, expected: [${expectedValue}]`, function () {
                const { desireLength, arr } = givenValue;
                const actual = solution(desireLength, arr);
                expect(actual).deep.equals(expectedValue);
            });
        });
    });
});
