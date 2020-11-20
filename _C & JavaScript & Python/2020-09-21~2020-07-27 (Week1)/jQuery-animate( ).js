/*
$(document).ready(function(){
    $("button").click(function(){
        $(".div1").animate({
            height:'250px',
            width:'250px',
            opacity:'0.5'
           });
    });
});
*/
$(document).ready(function(){
    $(".btn1").click(function(){
        //$(".div1").animate({height:'250px'}.opacity(0.5).left("500px"));
        $(".div1").slideUp(2000).slideDown(2000);
    });
})

$(document).ready(function(){
    $("button").click(function(){
        var div2 = $(".div2");
        div2.animate({height:'300px', opacity:'0.5'},"slow");
        div2.animate({width:'300px', opacity:'0.5'},"slow");
        div2.animate({left:'500px', opacity:'0.5'},"slow");
        
    });
    $(".btn2").click(function(){
        $(".div2").stop();
    })
});

