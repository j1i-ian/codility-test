export function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

export function factorial(givenNumber) {
    let result = 1;
    if (givenNumber > 1) {
        do {
            result *= givenNumber--;
        } while (givenNumber > 0);
    }

    return result;
}
