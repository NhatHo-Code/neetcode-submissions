class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let countZero = 0
        let countOne = 0
        for (let i = 0; i < sandwiches.length; i++){
            if(students[i] == 1){
                countOne++
            }
            else{
                countZero++
            }
        }
        for (const sandwich of sandwiches){
            if(sandwich === 0 && countZero > 0){
                countZero--
            }
            else if (sandwich == 1 && countOne > 0){
                countOne--
            }
            else{
                break
            }
        }
        return countZero + countOne
    }
}
