export default function solution(givenArray, desireRotation) {
    const index = desireRotation % givenArray.length;

    let rotated = [];

    if (index !== 0) {
        const startArray = givenArray.splice(givenArray.length - index, desireRotation);

        rotated = startArray.concat(givenArray);
    } else {
        rotated = givenArray;
    }

    return rotated;
}
