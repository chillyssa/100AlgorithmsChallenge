export function addTwoDigits(n: any): number{
    let sum = 0; 

    // variable to split the parameter up into an array 
    const nums = n.toString().split('');
    // console.log(nums);
    
    // for each element in the array add the elements to the sum 
    nums.forEach(num=>{
        sum += parseInt(num);
    })

    // return the summed total of each digit in the given parameter.  
    return sum; 
}

// console.log(addTwoDigits(29));