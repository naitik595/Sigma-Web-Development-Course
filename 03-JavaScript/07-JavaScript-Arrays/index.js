let arr = [1, 2, 4, 5, 7]
 // Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length);

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])
  
  // Array methods

// 1. Method: toString() > Converts an array to a string of comma separated values 

console.log(arr.toString());
console.log(arr.join(" and "));


// 2. Some important array methods
// 1. pop() > removes last element from the array
// 2. push() > adds a new element at the end of the array
// 3. shift() > removes first element and returns it
// 4. unshift() > adds element to the beginning returns new array lenth
// 5. delete > array element can be deleted using the delete operator

// a = [1, 2, 3, 4, 5, 6]
// console.log(a.pop());
// console.log(a);
// console.log(a.push(100));          
// console.log(a);
// console.log(a.push("Harry"));
// console.log(a);
// console.log(a.shift());
// console.log(a);
// console.log(a.unshift("Jack"));
// console.log(a);
// console.log(delete a[6]);
// console.log(a);
// console.log(a.length);
// console.log(a[6]);

// 3. Method: concat() > used to jion arrays to the given array

// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]
// let a3 = [9, 8, 7]
// console.log(a1.concat(a2, a3));

// 4. Method: splice() > splice can be used to add new items to an array

// let numbers  = [1, 2, 3, 4, 5]
// console.log(numbers.splice(1, 2));
// console.log(numbers);
// console.log(numbers.splice(1, 3));
// console.log(numbers);
// console.log(numbers.splice(1, 3, 222, 333));
// console.log(numbers);
 

