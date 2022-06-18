import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './07-frog-river-one.js';

describe('07 Frog River One', () => {
    describe('solution test', () => {
        [
            {
                givenValue: {
                    desireDistance: 5,
                    arr: [1, 3, 1, 4, 2, 3, 5, 4]
                },
                expectedValue: 6
            },
            {
                givenValue: {
                    desireDistance: 1,
                    arr: [1]
                },
                expectedValue: 0
            },
            {
                givenValue: {
                    desireDistance: 5,
                    arr: [3]
                },
                expectedValue: -1
            }
        ].forEach(function ({ givenValue, expectedValue }) {
            it(`should be passed: value is given ${JSON.stringify(
                givenValue
            )}, expected: [${expectedValue}]`, function () {
                const { desireDistance, arr } = givenValue;
                const actual = solution(desireDistance, arr);
                expect(actual).equals(expectedValue);
            });
        });
    });
});
