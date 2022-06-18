import { describe } from 'mocha';
import { expect } from 'chai';
import { combination, factorial } from './util.js';

describe('Util functions test', () => {
    describe('Factory test', () => {
        [
            {
                givenValue: 0,
                expectedValue: 1
            },
            {
                givenValue: 2,
                expectedValue: 2
            },
            {
                givenValue: 3,
                expectedValue: 6
            },
            {
                givenValue: 4,
                expectedValue: 24
            }
        ].forEach(function ({ givenValue, expectedValue }) {
            it(`should be passed: value is given ${givenValue}, expected: ${expectedValue}`, function () {
                const actual = factorial(givenValue);
                expect(actual).equals(expectedValue);
            });
        });
    });

    describe('Combination test', () => {
        [
            {
                givenValue: 0,
                expectedValue: 1
            },
            {
                givenValue: 2,
                expectedValue: 2
            },
            {
                givenValue: 3,
                expectedValue: 6
            },
            {
                givenValue: 4,
                expectedValue: 24
            }
        ].forEach(function ({ givenValue, expectedValue }) {
            it(`should be passed: value is given ${givenValue}, expected: ${expectedValue}`, function () {
                const actual = combination(givenValue);
                expect(actual).equals(expectedValue);
            });
        });
    });
});
