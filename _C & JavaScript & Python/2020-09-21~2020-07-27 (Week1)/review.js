var keke = "1234";
var kekeke;
kekeke = "1223";
// var ff, age, sex;
// ff = "hhh";
// age = 18;
// sex = "male";
//一次声明多个变量并赋值
var ff = "hhh", age = 18, sex = "male",address;
//console.log(ff, age, sex, address);
console.log(age); 
//console.log(kekeke);
//我们在什么时候需要声明一个变量？ 当我们想要存储一个值的时候可用到变量；
//typeof 变量名  or  typeof(变量名) 是用来检测声明的是什么样的数据类型;
//console.log(type(kekeke));
//NaN （not a number ）；他本来是要给你返回一个数值，但是现在它没有办法给你返回一个数值，所以返回了一个NaN；但他也是一种特殊的number

//定义一个数组变量
var table = ["name", "color", "size"];   //注：数组里面是一个字符串哦
//定义一个对象变量
var desk = {name:"myDesk", color:"red", size:"very big"};
console.log(table);
console.log(desk);

//JS函数   当调用函数时，会执行函数内的代码
var age = 19;
function myFunction(age) {
    return age;
}
console.log(age);
//与 && (and); 或|| (or); 非！(not)

//if 语句练习  输入数字，显示星期几

/*function myFunction() {
    var value = Number(window.prompt("请输入数字","1"));
   // window.prompt("请输入数字","1");
if(!isNaN(value) && 0<value<=7) {
    if(value == 1) {
        console.log("今天是周一");
    }
    else if(value == 2) {
     console.log("今天是周二");
    }
    else if(value == 3) {
        console.log("今天是周三");
    }
    else if(value == 4) {
        console.log("今天是周四");
    }
    else if(value == 5) {
        console.log("今天是周五");
    }
    else if(value == 6) {
        console.log("今天是周六");
    }
    else if(value == 7) {
        console.log("今天是周日");
    }

}
else {
    console.log("请输入数字");
}

}
console.log(myFunction(3));
*/

var mood = "very happy";
var age = 18;
// var mood = "very happy", age = 18;
//console.log(alert(mood));
//console.log(alert(age));

var height = "about 4'49\"tall"
console.log(height);

//定义一个数组
var name = Array(3);
name[0] = "Jone";
name[1] = "Pter";
name[2] = "Molly";
console.log(name);

var name1 = Array("Jone","Molly","Mike");

var name2 = ["Jone","Molly","Mike"];
console.log(name1);

var mood = "happy";
var message = "I am feeling" + mood;


console.log(message);

//input = [3,4,6,8,7,5,6,13,7];
//outpuy = [3,7,5,13,7];
//找到所有的奇数项，同时运用for循环，if ，continue,break

function single(array) {
    var h = [];
    var m = [];
    for (var i = 0; i < array.length; i++) {
        var number;
        if (array[i]%2 > 0) {
            h.push(array[i]);

        }
        /*else {
            continue;

        }*/

    }
    return h;
    
}
console.log(single([3,4,6,8,7,5,6,13,7]));

var number = 12;
var str = "Hello";
//input = [1,2,3,7,8,9,15,200] and value = 300 ;  
//output = ture or false
function findNumber(array, value) {
    
    for (var i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return true;

        }
        else {
            return false;
        }


    }
    return value;


}
console.log(findNumber([1,2,3,7,8,9,15,200],15));

//2.input = [3,4,6,10,11,12];
//  output = [12,11,10,6,4,3]; 操作数组本身，定义一个变量，值变量；通过换元的方式（input第一个值存起来）
//var a = input[0]; input[0] = input[input.length - 1]; input[input.length - 1] = a;