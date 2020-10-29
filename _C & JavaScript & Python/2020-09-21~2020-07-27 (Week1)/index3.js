// Input: [1,3,547,4,7859,56]
// Output: [1, 7859]
var Input = [1,3,547,4,7859,56];
function compare(array) {
    var h = [];
    var Max = array[0];
    var Min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > Max) {
            Max = array[i];
        }
        if (array[i] < Min) {
            Min = array[i];

        }


    }
    h.push(Min);
    h.push(Max);
    return h;

    
}
// console.log(compare(Input));

// Input: [1,3,547,4,7859,56]
// Output: 7859
function  Max1(array) {
    var Max = array[0];
    var Min = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > Max) {
            Max = array[i];

        }
        if (array[i] < Min) {
            Min = array[i];

        }

    }
    return {Max1: Max, Min1: Min};
    
}
// console.log(Max1(Input));


var str="145767867893";
//查找"Hello"
var patt=/^\d{11}$/;
var result=patt.test(str);

//Input: [1,3,634,67,443,4,7,4654,8]
//Condition: < 10
//Output: [1,3,4,7,8]
var Input = [1,3,634,67,443,4,7,4654,8];
function Min(array) {
    var h = [];
    var Min;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            Min = array[i];
            h.push(Min);

        }

    }
    
    return h;

}
console.log(Min(Input));
//h.push(Min); in for () {} and out are different ?