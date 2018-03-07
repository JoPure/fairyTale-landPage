/**
 * Created by jo.chan on 2016/3/30.
 */
var mytimer = setInterval(right, 5000);

function close() {
    $(".wrap").hide();
    $(".load").css("display","none");
    $(".video-js")[0].player.ended();
}

$(".videoBtn").on("click", function () {
    $(".wrap").show();

    $(".video-js")[0].player.play();
});


function right() {
    if ($(".page4").hasClass("curr")) {
        $(".page4").css("display", "none").removeClass("curr");
        $(".page1").css("display", "list-item").addClass("curr");
        $(".four").removeClass("mark");
        $(".one").addClass("mark");
    } else {
        $(".curr").css("display", "none").removeClass("curr").next().addClass("curr").css("display", "list-item");
        $(".mark").removeClass("mark").next().addClass("mark");
    }
    clearInterval(mytimer);
    mytimer = setInterval(right, 10000);
}

function left() {
    if ($(".page1").hasClass("curr")) {
        $(".page1").css("display", "none").removeClass("curr");
        $(".page4").css("display", "list-item").addClass("curr");
        $(".one").removeClass("mark");
        $(".four").addClass("mark");
    } else {
        $(".curr").css("display", "none").removeClass("curr").prev().addClass("curr").css("display", "list-item");
        $(".mark").removeClass("mark").prev().addClass("mark");
    }
    clearInterval(mytimer);
    mytimer = setInterval(right, 10000);
}

$(function () {
    $(".pageTab li").click(function () {
        if ($(this).hasClass("mark")) {
            $(this).removeClass("mark");
            $(this).trigger("click");
        } else {
            $(".pages").find(".curr").css("display", "none").removeClass("curr").fadeOut();
            $(".pageTab").find(".mark").removeClass("mark");
            $(this).addClass("mark");
            var index = ".page" + ($(this).index() + 1);
            $(index).addClass("curr").css("display", "list-item").fadeIn();
        }
        clearInterval(mytimer);
        mytimer = setInterval(right, 10000);
    });

    $(".video-js").click(function () {
        if ($(".video-js")[0].player.ended()) {
            $(".video-js")[0].player.play();
        }
        else {
            $(".video-js")[0].player.pause();
            $(".load").css("display", "block");
        }
    });

    $(".load").click(function () {
        if ($(".video-js")[0].player.paused()) {
            $(".video-js")[0].player.play();
            $(".load").css("display", "none");
        } else {
            $(".video-js")[0].player.pause();
            $(".load").css("display", "block");
        }
    });


});
//
//function videoSrc1(){
//    $('video').prop('src','http://1867799823.rsc.cdn77.org/cobequangkhandovn/home/media/wh.mp4');
//}

function videoSrc2(){
    $('video').prop('src','http://1867799823.rsc.cdn77.org/cobequangkhandovn/home/media/snow.mp4');
}

function videoSrc3(){
    $('video').prop('src','http://1867799823.rsc.cdn77.org/cobequangkhandovn/home/media/red.mp4');
}

function videoSrc4(){
    $('video').prop('src','http://1867799823.rsc.cdn77.org/cobequangkhandovn/home/media/wz.mp4');
}