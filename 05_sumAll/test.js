function sumAll(int1, int2) {

    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }

    if (typeof int1 !== 'number' || typeof int2 !== 'number') {
        return 'ERROR';
    }

    let ceil = 0;
    let floor = 0;
    let result = 0;

    if (int1 < int2) {
        floor = int1
        ceil = int2
    }
    else {
        floor = int2
        ceil = int1
    }

    for(let i = ceil; i >= floor; i--) {
        result += i
    }

    return result;
}

console.log(sumAll(4, 2));