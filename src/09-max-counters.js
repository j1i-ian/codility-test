export default function solution(desireLength, array) {
    const calculatedArray = Array(desireLength).fill(0);

    let max = 0;
    let minMax = 0;

    array.forEach((index) => {
        const arrIndex = index - 1;
        if (index > desireLength) {
            minMax = max;
        } else {
            if (calculatedArray[arrIndex] >= minMax) {
                calculatedArray[arrIndex]++;
            } else {
                calculatedArray[arrIndex] = minMax + 1;
            }

            max = Math.max(calculatedArray[arrIndex], max);
        }
    });

    return calculatedArray.map((el) => (el < minMax ? minMax : el));
}
