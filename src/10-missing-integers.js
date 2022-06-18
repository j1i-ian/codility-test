export default function solution(givenArray) {
    const sorted = givenArray.sort((a, b) => a - b);

    let index = 1;
    for (let element of sorted) {
        if (element > 0 && element === index) {
            index++;
        }
    }

    return index;
}
