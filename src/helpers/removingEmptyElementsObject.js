export const removingEmptyElementsObject = obj => {
    const newObj = {...obj}
    const keys = Object.keys(newObj)
    for(let i = 0; keys.length; i++) {
        if(!newObj[keys[i]]) {
            delete !newObj[keys[i]]
        }
    }
    return newObj
}

