function verifyPalindrome(string) {
    
    let reversedString = string.toLowerCase().split('').reverse().join('').replace('!', '');

    console.log(reversedString)

    if(reversedString === string.replace('!', '')) {
        return true;
    }

    else {
        return false;
    }
}
console.log(verifyPalindrome('racecar!'));