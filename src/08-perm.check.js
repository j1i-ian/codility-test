export default function solution(array) {
    const length = array.length;

    const gausSum = (length * (length + 1)) / 2;

    const sum = [...new Set(array)].reduce((acc, el) => acc + el, 0);

    return gausSum === sum ? 1 : 0;
}
