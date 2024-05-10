function reverseString(string) {
    
    let reversedString = ''

    let iterations = string.length

    for (let i = 0; i < iterations; i++) {
        reversedString += string.charAt(string.length - 1)
        string = string.slice(0, -1)
        
    }
    return reversedString;
}

console.log(reverseString('promising stranger'));