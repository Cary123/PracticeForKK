function createCircle() {
    var div = document.createElement("div"); // <div></div>
    var circleClass = document.createAttribute("class"); // {attrName: '', value: "", atr, onclikc, oblur;..}
    circleClass.value = "circle"; // class = "circle"
    div.setAttributeNode(circleClass); // <div class = "circle"></div>
    document.body.appendChild(div);
}

function createDelta() {
    var div = document.createElement("div");  //<div></div>                          create a div
    var deltaClass = document.createAttribute("class");  //<div class = " "></div>   create a attribute class
    deltaClass.value = "delta";  //class = " delta "                                 make class = " delta " 
    div.setAttributeNode(deltaClass);   //<div class = "delta"></div>                make class = " delta " into div
    document.body.appendChild(div);  // make the div into the body                   make div into document.body



}

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


