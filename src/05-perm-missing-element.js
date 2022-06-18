export default function solution(givenArray) {
    const maxNumber = givenArray.length + 1;
    const gausSum = (maxNumber * (maxNumber + 1)) / 2;

    const allSum = givenArray.reduce((acc, el) => acc + el, 0);

    return gausSum - allSum;
}
