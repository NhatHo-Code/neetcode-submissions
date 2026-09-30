class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxArr = -1
        for(let i = arr.length -1; i >= 0;i--){
            let temp = arr[i]
            arr[i] = maxArr
            if(temp > arr[i]){
                maxArr = temp 
            }
        }
        return arr
    }
}
