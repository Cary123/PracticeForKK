// console.log("hello" + 1 + false +"he")
// console.log(1+"2")
// console.log(3*"2.5")

// console.log("HelloWorld")

var Numbers = ["Molly", "Jack", "Job", "Mike"];
// console.log(Numbers.length) //How much items in array

for (var i = 0; i < Numbers.length; i++) {
    // console.log(Numbers[i]);
}

var Numbers = ["Molly", "Jack", "Job", "Mike"];
function myfunction(array) {
    var h = []
    for (var i = 0; i < array.length; i++) {

        var element = array[i];
        var prefix = element[0];
        h.push(prefix);
    }
    return h;

}
// console.log(myfunction(Numbers))

// Input:  [1, 2, 5, 6, 79, 1]
// Output:  [3, 11, 80]
var Input = [1, 2, 5, 6, 79, 1]
function num(array) {
    var m = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i] + array[i + 1];
        m.push(element);
        i = i + 1;
    }
    return m;
}
// console.log(num(Input));

// Input:  [1, 2, 5, 6, 79, 1]
// Output:  [2, 81, 11]
var Input2 = [1, 2, 5, 6, 79, 1];

function myfunction2(array2) {
    var n = [];

    for (var i = 0; i < array2.length / 2; i++) {
        var h = 15;
        var num2 = array2[i] + array2[array2.length - (i + 1)]
        n.push(num2);
    }

    return n;

}


// console.log(myfunction2(Input2));  //为什么是打印input2呢？而不是n 或者别的呢？



// cars=["BMW","Volvo","Saab","Ford"];
// for (var i=0;i<cars.length;i++){
// 	document.write(cars[i] + "<br>");
// }



// Input : [1, 2, 3]
// Output : 6
var Input = [1, 2, 3]
function myfunction3(array3) {
    var m = 0;
    for (var i = 0; i < array3.length; i++) {
        m = m + array3[i];

    }
    return m;
}
var result = myfunction3(Input)

//console.log(result);

var car = {
    name: "little car",
    color: "white",
    getNameAndColor: function (owner) {
        return owner + " " + this.name + " " + this.color;
    }
}
car.name = "big car"
//console.log(car.getNameAndColor("kexinqin"));

//console.log(car.name);
//console.log(car["color"]);

// if ("5" === "5"){
//     console.log("Hello");

// };

var kexinqin = "dai,u,fgi,uhhi";
//console.log(kexinqin.indexOf("a"));
//console.log(kexinqin.split("u"));

var answer = (2 > 3) ? "Ok" : "No";
//console.log(answer);

// if (5<6){
//     console.log("Ok");
// }
// else {
//     console.log("No");
// }

// Input ['Monday', '', 'Sunday', 'Wed']  
// Output [true, true, true, true, true, false, false]
// Output how many true, how many false: [4, 5]

function elect(Input3) {

    var h = [];
    for (var i = 0; i < Input3.length; i++) {
        if (Input3[i] === "Saturday" || Input3[i] === "Sunday") {
            h.push(false);

        }
        else {
            h.push(true);

        }
    }
    return h;

}


function electment(Input3){
    var h = [];

    for(var i = 0; i<Input3.length; i++){
       
        switch(Input3[i]){
            case "Saturday":
                 h.push(false);
                 break;
            case "Sunday":
                h.push(false);
                break;
            default :
                h.push(true);
                break;


        }


    }
    return h;
}


var hfhfhfhf = ["Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday", "Sunday", "Wednesday", "Thursday"];
var result2 = electment(hfhfhfhf);
console.log(result2);
// var result2 = elect(["Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday", "Sunday", "Wednesday", "Thursday"]);


function Numbers1(lay) {
    var h = [];
    var countFalse = 0;
    var countTrue = 0;
    for (var i = 0; i < lay.length; i++) {
        if (lay[i] === true) {
            countTrue = countTrue + 1;
            // h.push(countTrue);


        }
        else {
            countFalse = countFalse + 1;
            // h.push(countFalse);


        }
        // h.push(countTrue);
        // h.push(countFalse);

    }
    h.push(countTrue);
    h.push(countFalse);
    return h;



}
console.log(Numbers1(result2));

// console.log(Input3[i]); 
// if (Input3[i] >= 6 && Input3 < 7){
//     console.log(Input3[i]);

// }
// else {

// }

// var time = 10;
// if (time<10){
//     console.log("Good morning");

// }
// else if (time>=10 && time <20){
//     console.log("Good day");

// }
// else {
//     console.log("Good night");
// }

