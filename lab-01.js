let arr = [4, 2, 7, 3, 1, 9];

//Cau 4
let sum = 0;
for ( let i =0; i < arr.length; i++) {
    sum += arr[i];
  }

console.log("Tổng các số trong mảng là: " + sum);


//Cau 2
arr.sort(function(a, b) {
    return a - b;
});

console.log(arr);