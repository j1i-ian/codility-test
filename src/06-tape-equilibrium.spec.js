import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './06-tape-equilibrium.js';

describe('06 tape equilibrium', () => {
    describe('solution test', () => {
        [
            {
                givenValue: [3, 1, 2, 4, 3],
                expectedValue: 1
            },
            {
                givenValue: [5, 1, 2, 5, 30, 5],
                expectedValue: 22
            },
            {
                givenValue: [5, 30, 2, 5, 1, 5],
                expectedValue: 22
            },
            {
                givenValue: [5, 6, 2, 4, 1],
                expectedValue: 4
            },
            {
                givenValue: [1, 1, 3],
                expectedValue: 1
            },
            {
                givenValue: [-1000, 1000],
                expectedValue: 2000
            },
            {
                givenValue: [-2, -3, -4, -1],
                expectedValue: 0
            },
            {
                givenValue: [-2, 3, -4, -1],
                expectedValue: 0
            },
            {
                givenValue: [-10, -20, -30, -40, 100],
                expectedValue: 20
            }
        ].forEach(function ({ givenValue, expectedValue }) {
            it(`should be passed: value is given ${JSON.stringify(
                givenValue
            )}, expected: [${expectedValue}]`, function () {
                const actual = solution(givenValue);
                expect(actual).equals(expectedValue);
            });
        });
    });
});
