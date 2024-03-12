const isPangram = (str) => {
    const stringLower = str.toLowerCase()
    const alpha = new Set();
    for (let letter of stringLower){
        if (letter >= "a" && letter <="z"){
            alpha.add(letter)

        }
    }
    if (alpha.size === 26){
        return true;
    }else{
        return false;
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True

console.log(isPangram("I like cats, but not mice"))
// -> False)

// I think the runtime of this again is O(n) beacuse I am again iterating through a string, I am not sure if if the extra check for if it is a letter makes an impact on this, but I dont think it does, because you are not doing another loop just confirming what the index is.