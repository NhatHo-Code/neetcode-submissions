class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let x = []
        for (let i = 0; i < operations.length; i++){
            if(operations[i] === "+"){
                x.push(x[x.length-1] + x[x.length-2])
            }
            else if(operations[i] === "C"){
                x.pop()
            }
            else if(operations[i] === "D"){
                x.push(x[x.length-1]*2)
            }
            else {
                x.push(Number(operations[i]))
            }
            
        }
        return x.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}
