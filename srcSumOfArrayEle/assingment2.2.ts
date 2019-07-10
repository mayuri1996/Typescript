function Summation(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var a = [23,6,7,4,5,7];
var arr = Summation(a);
console.log(arr);