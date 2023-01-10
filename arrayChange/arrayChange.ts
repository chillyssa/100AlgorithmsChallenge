export function arrayChange(inputArray: number[]): number {
    let count = 0;
    // loop through the input array to compare each value to the next value 
    for (let i = 0; i < inputArray.length; i++) {
        // if current value is greater than or equal to the next value         
        if (inputArray[i] >= inputArray[i + 1]) {
            // calculate difference from current value +1 and the next value, 
            const diff = (inputArray[i] + 1) - inputArray[i + 1];
            // update next value to the current value +1
            inputArray[i + 1] = inputArray[i] + 1;
            // update count with calculated difference 
            count += diff;
        }
    }
    return count;

}

// console.log(arrayChange([1,1,1]));