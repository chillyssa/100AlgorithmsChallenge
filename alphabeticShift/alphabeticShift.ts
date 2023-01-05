export function alphabeticShift(inputString: string): string {
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let letters = inputString.split('')
    console.log(letters)

    for (let i = 0; i < letters.length; i++) {
        let index = 0;
        if (letters[i] !== 'z') {
            index = alphabet.indexOf(letters[i]) + 1
        }

        letters[i] = alphabet[index]
    }

    return letters.join('');

}

// console.log(alphabeticShift('crazy'));