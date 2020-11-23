$(document).ready(function(){
    $(".pre_01").click(function(){
        $(".pre").prepend("<h1 style = 'color: blue;'>文本</h1>");
    });
    $(".append_01").click(function(){
        $(".append").append("<h2 style = 'color: red;'>文本</h2>");
    });
    $(".before_01").click(function(){
        $(".before").before("<h2 style = 'color: yellow;'>文本</h2>");
    });
    $(".after_01").click(function(){
        $(".after").after("<h2 style = 'color: pink;'>文本</h2>");
    });
});