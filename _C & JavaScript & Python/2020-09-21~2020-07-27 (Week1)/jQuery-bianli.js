$(document).ready(function(){

    $(".parent").click(function(){
        $(".title").parent().css({ "color":"pink", "border":"100px soild red"});  //border没有显示出来，但是color显示出来了？
        // $(".one").parents("div").css({"background":"yellow", "border": "1px soild black"});   //bg can ,but border cannot?
        // $(".one").parentsUntil(".div").css({ "color":"yellow","border": "100px soild black"});   //successful
    });


    $(".children").click(function(){
       // $("div").children().css({"color":"red", "border": "1px solid black"});  //success
    //  $("div").find("li").css({"color":"blue", "border":"1px solid blue"});      //success
        $("div").find("*").css({"background":"pink","border":"1px solid yellow"});  //success
    });
});