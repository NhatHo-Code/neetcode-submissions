class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const nArray = []
        for (let i = 0; i < s.length ;i++){
            //add if its an open paranthasese 
            if (s[i] == '{'){
                nArray.push(s[i]);
            }
            else if (s[i] == '['){
                nArray.push(s[i]);
            }
            else if (s[i] == '('){
                nArray.push(s[i]);
            }
            //remove if its a closing paranthasese
            else if (s[i] == '}'){
                const topArray = nArray.pop();
                if (topArray !== '{'){
                    return false;
                }
            }
            else if (s[i] == ']'){
                const topArray = nArray.pop()
                if (topArray !== '['){
                    return false;
                }
            }
            else if (s[i] ==')'){
                const topArray = nArray.pop()
                if (topArray !== '('){
                    return false;
                }
            }

  
}
return nArray.length === 0 
    }
}