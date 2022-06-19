export default function solution(start, end, devidedBy) {
    if (start === 0 || end === 0) return Math.floor(end / devidedBy) + 1;

    const firstMultiple = Math.ceil(start / devidedBy);
    const lastMultiple = Math.floor(end / devidedBy);

    return lastMultiple - firstMultiple + 1;
}
