import { describe } from 'mocha';
import { expect } from 'chai';

import solution from './02-cyclic-rotation.js';

describe('02 cyclic rotation test', () => {
    [
        {
            givenValue: {
                arr: [3, 8, 9, 7, 6],
                rotation: 1
            },
            expectedValue: [6, 3, 8, 9, 7]
        },
        {
            givenValue: {
                arr: [3, 8, 9, 7, 6],
                rotation: 2
            },
            expectedValue: [7, 6, 3, 8, 9]
        },
        {
            givenValue: {
                arr: [3, 8, 9, 7, 6],
                rotation: 3
            },
            expectedValue: [9, 7, 6, 3, 8]
        },
        {
            givenValue: {
                arr: [5, -1000],
                rotation: 1
            },
            expectedValue: [-1000, 5]
        },
        {
            givenValue: {
                arr: [1, 1, 2, 3, 5],
                rotation: 7
            },
            expectedValue: [3, 5, 1, 1, 2]
        },
        {
            givenValue: {
                arr: [1, 1, 2, 3, 5],
                rotation: 12
            },
            expectedValue: [3, 5, 1, 1, 2]
        }
    ].forEach(function ({ givenValue, expectedValue }) {
        it(`should be passed: number is given ${JSON.stringify(
            givenValue
        )}, expected: [${expectedValue}]`, function () {
            const { arr, rotation } = givenValue;

            const actual = solution(arr, rotation);
            expect(actual).deep.equals(expectedValue);
        });
    });
});
