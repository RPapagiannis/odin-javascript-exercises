function convertToCelsius(temperature) {
    return parseFloat(((temperature - 32) * 5 / 9).toFixed(1));
}

function convertToFahrenheit(temperature) {
    return parseFloat((temperature * 9 / 5 + 32).toFixed(1));
}

console.log(convertToCelsius(72))

console.log(convertToFahrenheit(35))