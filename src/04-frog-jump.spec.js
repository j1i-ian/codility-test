import { describe } from 'mocha';
import { expect } from 'chai';
import solution from './04-frog-jump.js';

describe('04 frog jump', () => {
    describe('solution test', () => {
        [
            {
                givenValue: {
                    start: 10,
                    destination: 85,
                    distance: 30
                },
                expectedValue: 3
            }
        ].forEach(function ({ givenValue: givenArray, expectedValue }) {
            it(`should be passed: value is given ${JSON.stringify(
                givenArray
            )}, expected: [${expectedValue}]`, function () {
                const { start, destination, distance } = givenArray;
                const actual = solution(start, destination, distance);
                expect(actual).equals(expectedValue);
            });
        });
    });
});
