export default function solution(desireDistance, array) {
    let leatSet = new Set();
    let desireIndex = -1;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        leatSet.add(element);

        if (leatSet.size === desireDistance) {
            desireIndex = i;
            break;
        }
    }

    return desireIndex;
}
