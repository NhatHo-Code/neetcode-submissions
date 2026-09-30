class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let checkerArr = []
        for(let i = 0; i < s.length; i++){
            if(s[i] == "("){
                checkerArr.push(s[i])
            }
            else if(s[i] == "["){
                checkerArr.push(s[i])
            }
            else if(s[i] == "{"){
                checkerArr.push(s[i])
            }
            else if(s[i] == ")"){
               if (checkerArr[checkerArr.length-1] == "("){
                checkerArr.pop()
                }
                else{
                    return false
                }
            }
            else if(s[i] == "]"){
                if (checkerArr[checkerArr.length-1] == "["){
                checkerArr.pop()
                }
                else{
                    return false
                }
            }
            else if(s[i] == "}"){
                if (checkerArr[checkerArr.length-1] == "{"){
                checkerArr.pop()
                }
                else{
                    return false
                }
            }
        }
        return checkerArr.length === 0
    }
}
