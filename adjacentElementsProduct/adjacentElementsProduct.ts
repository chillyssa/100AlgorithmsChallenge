export function adjacentElementsProduct(inputArray: number[]): number {
    // First pair multiplication 
    let product = inputArray[0] * inputArray[1];

    // loop through the array 
    for (let i=0; i < inputArray.length - 1; i++){
         // multiply each pair of adjacent numbers 
         const currentProduct = inputArray[i] * (inputArray[i+1]);
    
         // if the currentProduct is greater than the previous product, set variable product equal to currentProduct
        if(currentProduct > product){
            product = currentProduct;
        }
    }
   
    return product
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));