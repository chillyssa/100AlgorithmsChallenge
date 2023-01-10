export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let maxSum = inputArray[0]; 
    let sum = 0; 

    for(let i = 0; i<k; i++){
        sum+= inputArray[i];
    }

    for(let i=k; i<inputArray.length; i++){
    
            sum -= inputArray[i-k];
            sum += inputArray[i];
         
            if(sum>maxSum){
                maxSum = sum; 
            }
    }


    return maxSum; 
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));