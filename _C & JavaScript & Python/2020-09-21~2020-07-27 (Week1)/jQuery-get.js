$(document).ready(function(){
    $(".pre_01").click(function(){
        $(".pre").prepend("<h1 style = 'color: blue;'>文本</h1>");
    });
    $(".append_01").click(function(){
        $(".append").append("<h2 style = 'color: red;'>文本</h2>");
        $(".append").append(".c");
    });
    $(".before_01").click(function(){
        $(".before").before("<h2 style = 'color: yellow;'>文本</h2>");
    });
    $(".after_01").click(function(){
        $(".after").after("<h2 style = 'color: pink;'>文本</h2>");
    });




// append preppend / after before 分别是指在被选元素的结尾，开头 / 后面，前面 插入新的元素的。但是前面两个是在元素内部的结尾开头插入的；插入的元素是这两个元素的子元素；
// 而 after before 是需要换行在后面和前面插入的；插入的元素是这两个方法是兄弟元素；
    $(".pre_02").click(function(){
        $(".pre").prepend(".c");
    });
        
    $(".append_02").click(function(){
        $(".append").append(".c");
        
    });
    $(".before_02").click(function(){
        $(".before").before(".c");
        
    });
    $(".after_02").click(function(){
        $(".after").after(".c");
    });

});

//如果要多追加几个元素，那么你就要多声明几个变量；
function afterText() {
    var text_01 = "<p>Yesterday is Monday.</p>"
    var text_02 = $("<p></p>").text("Today is my first day writing.");
    var text_03 = document.createTextNode("and I am very excited !");
    //text_03.innerHTML = "and I am very excited !";
    $(".moreElements").append(text_01, text_02, text_03 );

}

//delete  remove()里面不能写参数了吗？
$(document).ready(function(){
    $(".delete_01").click(function(){
         
        $(".delete_02").empty(".delete_04");
    });
});