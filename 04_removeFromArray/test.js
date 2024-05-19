function removeFromArray(originalArray, ...removedItems) {
    
    const newArray = []

    for (let item of originalArray) {
        if (removedItems.includes(item)) {
            continue
            }
        newArray.push(item)
    }
    return newArray
}

console.log(removeFromArray([1, 2, 3], 1))

