export function absoluteValuesSumMinimization(a: number[]): number {
    // check if the number of elements in the array is even or odd 
    const isEven = a.length % 2 === 0 ;

    // if isEven return the left center element, otherwise return the center element 
    return isEven ? a[a.length / 2-1] : a[Math.floor(a.length/2)];  
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));