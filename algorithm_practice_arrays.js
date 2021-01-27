//Print values and sum

var sum = 0;
var testArr = [6,3,5,1,2,4];
for(var i = 0; i < testArr.length; i++){
    console.log("Num: " + testArr[i] + "," + "Sum: " + (sum += testArr[i]));
}



var mult = 0;
var testArr = [6,3,5,1,2,4];
for(var i = 0; i < testArr.length; i++){
    mult = i * testArr[i];
    testArr[i] = mult;
}
console.log(testArr);
