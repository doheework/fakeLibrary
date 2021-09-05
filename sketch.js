$(function(){
    var t;
    $("body").mousemove(function(){
        clearTimeout(t); 
        var audio = document.getElementById("myaudio");
        audio.volume=1.0;
        $('#shh').show();
        t = setTimeout(function(){
            var audio = document.getElementById("myaudio");
            audio.volume=0.0;
            $('#shh').hide();
        }, 200);
    });
});



$(document).mousemove(function(e){
    $('#shh').css("top", e.pageY);
    $('#shh').css("left", e.pageX);

});

function play() { 
    var audio = document.getElementById("myaudio"); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 

$(document).ready(function(){
    $("#hit").click(function(){
         $(".enter").hide();
        $("#hit").hide();
        $(".title").hide();
    });

});
