class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let x = []
        let holder = 0
        for (let i = 0; i < operations.length; i++){
            if(operations[i] === "+"){
                x.push(x[holder-1] + x[holder-2])
                holder = holder + 1
            }
            else if(operations[i] === "C"){
                x.pop()
                holder = holder-1
            }
            else if(operations[i] === "D"){
                x.push(x[holder-1]*2)
                holder = holder + 1
            }
            else {
                x.push(Number(operations[i]))
                holder = holder + 1
            }
            
        }
        return x.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}
