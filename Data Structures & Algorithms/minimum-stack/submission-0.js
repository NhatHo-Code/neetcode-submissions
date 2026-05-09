class MinStack {
    constructor() {
        this.nArray = [] 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.nArray.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.nArray.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.nArray[this.nArray.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        const min = Math.min(...this.nArray);
        return min
    }
}
