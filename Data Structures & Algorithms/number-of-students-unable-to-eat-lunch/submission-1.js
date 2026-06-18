class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let count0 = 0
        let count1 = 0 
       for (let i = 0; i < students.length;i++){
        if (students[i] == 0){
            count0++
        }
        else if (students[i] == 1){
            count1++
        }
       }
       for (let i = 0; i < sandwiches.length; i++){
        if (sandwiches[i] == 0){
            if (count0 !== 0){
                count0--
            }
            else break
            
        }
        else if (sandwiches[i] == 1){
            if (count1 !== 0){
                count1--
            }
            else break
        }
       } 
       return count1 + count0
    }
}
