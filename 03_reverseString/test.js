function reverseString(originalString) {

    let reversedString = ''

    let iterations = originalString.length

    for (let i = 0; i < iterations; i++) {
        reversedString += originalString.charAt(originalString.length - 1)
        originalString = originalString.slice(0, -1)

    }
    return reversedString;
}

console.log(reverseString('promising stranger'));