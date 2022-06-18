export default function solution(givenOddArray) {
    let result = 0;

    givenOddArray.forEach((element) => {
        result ^= element;
    });

    return result;
}
