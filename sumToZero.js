

const addToZero = (arr) => {
    let set = new Set()
    for (let num of arr){
        if (set.has(-num)){
            return true;
        }
        set.add(num);
    }
    return false
}

console.log(addToZero([]))
// -> False

console.log(addToZero([1]))
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]))

//The run time I think is O(n) because it increases based on the length of the array.