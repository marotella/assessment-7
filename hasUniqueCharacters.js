const hasUniqueCharacters = (str) =>{
    let letterSet = new Set();
    for (let letter of str){
        if (letterSet.has(letter)){
            return false;
        }
        letterSet.add(letter);
    }
    return true;
}


console.log(hasUniqueCharacters("Monday"))
// -> True

console.log(hasUniqueCharacters("Moonday"))
// I think is agian is O(n) because you are iterating through a string and comparing the set, so as the string increases so the time  