/**
 * Created by jaWeber on 10/31/16.
 */
$(document).ready(function() {
    "use strict";

    var winTxt = "<br>I believe that we will win!!!";
    $("#title").click(function() {
        $(this).append(winTxt);
    });

    $('p').click(function() {
        $(this).toggleClass("highlight");
    });

    $('p').hover(function() {
        $(this).css("color","red");
    }, function() {
        if ($(this).hasClass("white")) {
            $(this).css("color","white");
        } else {
            $(this).css("color","black");
        }
    });

    $("#small").click(function() {
        $("body").css("font-size", ".8em");
    });
    $("#medium").click(function() {
        $("body").css("font-size", "1em");
    });
    $("#large").click(function() {
        $("body").css("font-size", "1.2em");
    });

    $('#baseball').hover(function() {
            $(this).css("height","300px");
        }, function() {
            $(this).css("height","150px");
    });

    $("#baseball2").click(function() {
        if ($(this).css("float") == "right") {
            $(this).css("float","left");
        } else {
            $(this).css("float","right");
        }
    });

    $("#print").click(function() {
        alert('Print Layout - not working yet.');
    });

});