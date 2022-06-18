export default function solution(givenNumber) {

    let maxBinaryLength = 0;
    let gapOn = false;

    let binaryLength = 0;

    while (givenNumber > 0) {
        const binaryOne = givenNumber % 2 === 1;

        givenNumber = givenNumber >> 1;

        if (binaryOne && gapOn) {
            maxBinaryLength = Math.max(maxBinaryLength, binaryLength);
            binaryLength = 0;
        } else if (binaryOne && gapOn === false) {
            gapOn = true;
        } else if (binaryOne === false && gapOn) {
            binaryLength++;
        }
    }

    return +maxBinaryLength;
}
