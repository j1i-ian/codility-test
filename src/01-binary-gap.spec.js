import { describe } from 'mocha';
import { expect } from 'chai';

import solution from './01-binary-gap.js';

describe('01 binary gap test', () => {
    [
        { givenValue: 9, expectedValue: 2 },
        { givenValue: 529, expectedValue: 4 },
        { givenValue: 20, expectedValue: 1 },
        { givenValue: 15, expectedValue: 0 },
        { givenValue: 32, expectedValue: 0 }
    ].forEach(function ({givenValue, expectedValue}) {

        it(`should be passed: number is given ${givenValue}, expected: ${expectedValue}`, function() {
            const actual = solution(givenValue);

            expect(actual).equals(expectedValue);
        })
    });

});
