const palindromes = function (string) {
    let reversedString = string.toLowerCase().split('').reverse().join('').replace('!', '');

    console.log(reversedString)

    if (reversedString === string.toLowerCase().replace('!', '')) {
        return true;
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
