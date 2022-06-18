export default function solution(givenArray) {
    if (givenArray.length < 3) {
        return Math.abs(givenArray[0] - givenArray[1]);
    }

    let sumAll = givenArray.reduce((arr, el) => arr + el);

    let minDiff = Infinity;
    let currentDiff = Infinity;

    let left = 0;
    let right = 0;

    for (let i = 0; i < givenArray.length - 1; i++) {
        const el = givenArray[i];
        left += el;
        right = sumAll - left;
        currentDiff = Math.abs(left - right);
        minDiff = Math.min(currentDiff, minDiff);
    }

    return minDiff;
}
