class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let attempt = 0 
        while(attempt < students.length){
        if (students[0] !== sandwiches[0]){
            let holder = students.shift()
            students.push(holder)
            attempt++
        }
        else{
            students.shift()
            sandwiches.shift()
            attempt = 0
        }
        }
        return students.length
    }
}
