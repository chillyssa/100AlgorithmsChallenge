export function allLongestStrings(inputArray: string[]): string[] {
    let outputArray: string[] = []; 
    let longestStr = 0; 

    // For each string, check the length and set longestStr to longest string length 
    inputArray.forEach((str: string) => {
        if (str.length > longestStr){
            longestStr = str.length
        }
    })

    // Push each string with longestStr length to outputArray 
    inputArray.forEach((str: string) =>{
        if(str.length === longestStr){
            outputArray.push(str);
        }  
    })

    return outputArray;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));