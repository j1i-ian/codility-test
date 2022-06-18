import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './03-odd-occurrence-in-array.js';

describe('03 odd occurrence in array', () => {
    describe('solution test', () => {
        [
            {
                givenArray: [9, 3, 9, 3, 9, 7, 9],
                expectedValue: 7
            },
            {
                givenArray: [42],
                expectedValue: 42
            }
        ].forEach(function ({ givenArray, expectedValue }) {
            it(`should be passed: value is given ${JSON.stringify(
                givenArray
            )}, expected: [${expectedValue}]`, function () {
                const actual = solution(givenArray);
                expect(actual).equals(expectedValue);
            });
        });
    });
});
