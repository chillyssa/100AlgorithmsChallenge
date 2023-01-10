export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    // create variables that are equal to your strongest and weakest and friends strongest and weakest arms 
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    // if yourStrongest is equal to friendsStrongest AND yourWeakest is equal to friendsWeatkest then the two people are equally strong 
    if (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest) {
        return true;
    } else {
        return false;
    }

}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
