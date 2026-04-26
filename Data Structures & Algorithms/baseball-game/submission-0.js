class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const score = []
        let total = 0
        for (let i = 0; i < operations.length ;i++){
        if (operations[i] === "+"){
            let scoreTotal = score[score.length - 1] + score[score.length - 2]
            score.push(scoreTotal)
        }
        else if (operations[i] === "D"){
            score.push(score[score.length-1]*2)
        }
        else if (operations[i] === "C"){
            score.pop()
        }
        else{
            score.push(Number(operations[i]))
        }
        }
        return score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    }
}
