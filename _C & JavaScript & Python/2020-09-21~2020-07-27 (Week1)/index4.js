function createCircle() {
    var div = document.createElement("div"); // <div></div>
    var circleClass = document.createAttribute("class"); // {attrName: '', value: "", atr, onclikc, oblur;..}
    circleClass.value = "circle"; // class = "circle"
    div.setAttributeNode(circleClass); // <div class = "circle"></div>
    document.body.appendChild(div);
}

/*
function createDelta() {
    var div = document.createElement("div");  //<div></div>                          create a div
    var deltaClass = document.createAttribute("class");  //<div class = " "></div>   create a attribute class
    deltaClass.value = "delta";  //class = " delta "                                 make class = " delta " 
    div.setAttributeNode(deltaClass);   //<div class = "delta"></div>                make class = " delta " into div
    document.body.appendChild(div);  // make the div into the body                   make div into document.body



}
*/

// dom 操作  
// event事件

function moveCircle() {

    setTimeout(function () {
        var circle = document.getElementsByClassName("circle")[0];
        var length = Math.random() * 500;
        var color1 = Math.round(Math.random() * 255);
        var color2 = Math.round(Math.random() * 255);
        var color3 = Math.round(Math.random() * 255);

        // circle.style = "border-color:rgb(" + color1 + "," + color2 + "," + color3 + ")"
        circle.style = "border-color:rgb(" + color1 + "," + color2 + "," + color3 + ")"
        circle.style.height = length + "px";
        circle.style.width = length + "px";

    }, 5000);

}

/*
function moveDelta() {
    setTimeout(function () {
        var delta = document.getElementsByClassName("delta")[0];
        var length = Math.random() * 1000;
        var color1 = Math.round(Math.random() * 255);
        var color2 = Math.round(Math.random() * 255);
        var color3 = Math.round(Math.random() * 255);

        delta.style = "border-color:rgb("+color1+","+color2+","+color3+")"
        delta.style.height = length + "px";
        delta
        
        .style.width = length + "px";



    }, 3000);
} 
*/

//点击一下淡入淡出紫色圆
//animate参数只能改变元素的位置和大小吗？不是的，改变颜色的话需要下载JQuery的颜色插件；

$(document).ready(function(){
    $("button").click(function(){
        // $(".circle_01").fadeIn(1000);
        // $(".circle_01").fadeOut(1000);
        // $(".circle_02").toggle(50);
        // $(".circle_01").fadeTo("slow", 0.23);
        // $(".circle_02").fadeTo("slow", 0.16);
        //$(".circle_02").slipDown();
        $(".circle_01").animate({left:"250px", height:'+=500px', width:'500px'});
    });


});


/*
$(document).ready(function(){
    $("button").click(function(){
        $(".circle_01").fadeOut(1000);
    });

});
*/
/*
//点击淡入再点击淡出
$(document).ready(function(){
    $("button").click(function(){
        $(".circle_02").toggle(50);
    });
});
*/