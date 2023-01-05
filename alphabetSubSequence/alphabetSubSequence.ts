export function alphabetSubsequence(s: string): boolean {
    const chars: string[]= s.split('');
    const charVals: number[] = []; 

    // split the input array s into characters then push the letter's ascii value into another array
    chars.forEach((char:string) =>{
        charVals.push(char.charCodeAt(0))
    })

    // Set is like an array but doesn't take in duplicates - if the set from the charVals is not equal to the original array, there is a duplicate. 
    if(new Set(charVals).size != charVals.length){
        return false;
    }

    // Check that the characters are in alphabetic order 
    for(let i=0; i<charVals.length; i++){
        if(charVals[i]>= charVals[i+1]){
            return false;
        }
    }

    return true 
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
console.log(alphabetSubsequence('zbx'))