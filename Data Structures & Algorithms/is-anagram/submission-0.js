class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length == t.length){
            let newS = (Array.from(s)).sort()
            let newT = (Array.from(t)).sort()
            let value = true
            for (let i = 0; i < s.length || i < t.length;i++){
                if (newS[i] !== newT[i]){
                    value = false
                    return value
                }
            }
            return value
        }
        else{
            return false
        }
    }
}
