class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const mapS = new Map()
      const mapT = new Map()
      if (s.length == t.length){
        for (let char of s){
          let currentS = mapS.get(char) || 0
          mapS.set( char, currentS + 1)
        }
        for (let char of t){
          let currentT = mapT.get(char) || 0
          mapT.set(char, currentT +1)
        }
        for (let [char, num] of mapS){
          if (mapT.get(char) !== num){
            return false
          }
        }
        return true
      }
      return false

    }
}
