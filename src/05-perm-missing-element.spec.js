import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './04-frog-jump.js';

describe('05 perm missing element', () => {
    describe('solution test', () => {
        [
            {
                givenValue: [2, 3, 1, 5],
                expectedValue: 4
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
