//1.先定义一个number 数组
var number;
number = new Array();   //①关键词 new?
number[0] = 1;
number[1] = 2;
number[2] = 3;
number[3] = 4;
number[4] = 5;
//用fo循环来遍历数组，并且在控制台输出；在控制台输出就是在浏览器调试的时候输出，而在html页面不会输出；
for(var i=0;i<number.length;i++){
    console.log(number[i]);

}
//注意：for 循环之间使用逗号分开的；
//输出所定义的数组里面的值i 要填写上；

//这里的定义变量的还有好几种写法；由繁到简；
//var number=new Array("1","2","3","4","5");  声明一个number变量，把新数组赋值给它，数组里面有1到5 这五个数；

//var number= ["1","2","3","4","5"]; 声明一个number ，把1到5的值以数组的形式赋值给number 变量；


//问题：①关键词 new?

//2.定义一个学生对象
var person = {学号:1001,姓名:"张三",成绩:89.9}; 
person.姓名 = "李四";
console.dir(person);
//console.log("啥玩意儿啊" + JSON.stringify(person));

//3.定义一个学生对象数组
var students = [ {学号:1001,姓名:"张三",成绩:89.9},
                 {学号:1002,姓名:"李四",成绩:91.6},
                 {学号:1003,姓名:"王五",成绩:99}
];
var x = students(89.9,91.6,99);
document.getElementById("demo").innerHTML = x;

function students(a,b,c) {
    return a*b*c/3;
}