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
    /*웹페이지 열었을 때*/
    $("#sound").show();
    $("#mute").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#sound").click(function(){
        $("#sound").hide();
        $("#mute").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#mute").click(function(){
        $("#sound").show();
        $("#mute").hide();
    });
});