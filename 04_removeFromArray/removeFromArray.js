const removeFromArray = function (originalArray, ...removedItems) {
    const newArray = []

    for (let item of originalArray) {
        if (removedItems.includes(item)) {
            continue
            }
        newArray.push(item)
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
