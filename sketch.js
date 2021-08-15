$(function(){

    var t;
    $("body").mousemove(function(){

        clearTimeout(t); //Clear restore volume function

        //Mute
        var audio = document.getElementById("song1");
        audio.volume=1.0;

        //Time restore volume
        t = setTimeout(function(){
            var audio = document.getElementById("song1");
            audio.volume=0.0;
        }, 200);
    });
});