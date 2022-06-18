import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './10-missing-integers.js';

describe('10 missing integers', () => {
    describe('solution test', () => {
        [
            {
                givenValue: [1, 3, 6, 4, 1, 2],
                expectedValue: 5
            },
            {
                givenValue: [1, 2, 3],
                expectedValue: 4
            },
            {
                givenValue: [-1, -3],
                expectedValue: 1
            },
            {
                givenValue: [2],
                expectedValue: 1
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
