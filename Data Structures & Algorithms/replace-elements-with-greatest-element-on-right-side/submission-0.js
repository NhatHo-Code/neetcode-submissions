class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let arrMax = -1
        for(let i = arr.length - 1 ; i >= 0 ;i--){
            let temp = arr[i]
            arr[i] = arrMax
            if(temp > arrMax){
                arrMax = temp
            }
        }
        return arr
    }
}
