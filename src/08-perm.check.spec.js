import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './08-perm.check.js';

describe('08 Perm Check', () => {
    describe('solution test', () => {
        [
            {
                givenValue: [4, 1, 3, 2],
                expectedValue: 1
            },
            {
                givenValue: [4, 1, 3],
                expectedValue: 0
            },
            {
                givenValue: [10, 6, 2, 4, 3, 1, 5, 7, 3],
                expectedValue: 0
            },
            {
                givenValue: [10, 6, 2, 4, 3, 1, 5, 7, 8, 9],
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
