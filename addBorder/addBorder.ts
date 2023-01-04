export function addBorder(picture: string[]): string[] {
    // create border of length + 2 of the array for beginning/end
    const border = "*".repeat(picture[0].length +2); 
    
    // add beg/end border to array 
    picture.push(border); 
    picture.unshift(border);  

    // add border to strings within the array 
    for(let i=1; i<picture.length-1; i++){
        picture[i] = "*".concat(picture[i], "*");
    }

    // retrun the modified array 
    return picture
}

console.log(addBorder(["abc", "ded"]));