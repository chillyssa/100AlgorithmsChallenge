export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff: number = 0; 
  
    for(let i=0; i<inputArray.length; i++){
        let diff = Math.abs(inputArray[i-1] - inputArray[i]);

        if(diff > maxDiff){
            maxDiff = diff;
        }
    }

    return maxDiff; 
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));