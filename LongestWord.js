const findLongestWord = (arr) => {
    let longest = "";
    for (let word of arr){
        if (word.length > longest.length){
            longest = word;
        }
    }
    return longest.length;
}

console.log(findLongestWord(["hi", "hello"]));

//I think this is again O(n) beacuse it again depends on the size of the array as I am iterating through the array and performing an action each time, but not looping again inside that loop.