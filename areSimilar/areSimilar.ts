import { createTrue } from "typescript";

export function areSimilar(a: number[], b: number[]): boolean {

    const aNot: number[]= []; 
    let bNot: number[] = []; 

    //if the arrays are exactly the same, they are similar 
    if(a.toString() === b.toString()){
        return true;
    }

    // if the arrays are not equal we must check if there is one and only one swap to make them similar. 
    for(let i=0; i<a.length; i++){
        if(a[i] !== b[i]){
            aNot.push(a[i]); 
            bNot.push(b[i]);
        }
    }

    // reverse bNot which should then be equal to aNot if they are similar for final truth check 
    bNot = bNot.reverse()

    if(aNot.length === 2 && aNot.toString() === bNot.toString()){
        return true
    }

    // all else will be false/not similar 
    return false; 
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
