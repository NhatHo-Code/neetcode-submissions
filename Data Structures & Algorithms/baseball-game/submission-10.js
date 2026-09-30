class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
    let finalArray = []
    let counter = 0
        for (let i = 0; i < operations.length ;i++){
            if (operations[i] == '+'){
                finalArray.push(finalArray[counter-1] + finalArray[counter-2])
                counter++
            }
            else if(operations[i] == 'C'){
                finalArray.pop()
                counter--
            }
            else if(operations[i] == 'D'){
                finalArray.push(finalArray[counter-1]*2)
                counter++
            }
            else{
                finalArray.push(Number(operations[i]))
                counter++
            }
        }
    const sum = finalArray.reduce((partialSum, a) => partialSum + a, 0);
    return sum
    }
}
