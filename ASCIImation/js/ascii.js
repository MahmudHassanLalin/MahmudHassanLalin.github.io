"use strict";
var animTimer = new timer();
$(document).ready(() => {
    $('#ddlAnimation').on('change', (e) => {
        const selectedVal = $(e.target).val();
        $("#txtArea").val(ANIMATIONS[selectedVal]);
    });
    $('#ddlSize').on('change', (e) => {
        const selectedVal = $(e.target).val();
        $("#txtArea").css({ 'font-size': selectedVal });
    });
    $("#txtArea").css({ 'font-size': $('#ddlSize').val() });
    $('#start,#stop').on('click', toggleControlEnableDisable);
    $('#start').on('click', () => {
        var test = $('#txtArea').val();
        var arr = test.split('=====');
        var i = -1;
        animTimer.start(() => {
            i++;
            if (i == arr.length) {
                i = 0;
            }
            var animTxt = arr[i];
            if (animTxt.indexOf('\n\n') == 0) {
                animTxt = animTxt.substring(2);
            } else if (animTxt.indexOf('\n') == 0) {
                animTxt = animTxt.substring(1);
            }
            $('#txtArea').val(animTxt);
        }, true);
    });
    $('#stop').on('click', () => {
        animTimer.stop();
        const selectedVal = $("#ddlAnimation").val();
        $("#txtArea").val(ANIMATIONS[selectedVal]);
    });
    $('#turbo').on('change', () => {
        if ($(this).is(":checked")) {
            animTimer.set_interval(50);
        } else {
            animTimer.set_interval(250);
        }
    })

})
function toggleControlEnableDisable(e) {
    $('#start,#stop,#ddlAnimation,#txtArea').prop('disabled', (i, v) => !v);
}
function timer() {
    var timer = {
        running: false,
        iv: 250,
        timeout: false,
        cb: function () { },
        start: function (cb, sd, iv) {
            var elm = this;
            clearInterval(this.timeout);
            this.running = true;
            if (cb) this.cb = cb;
            if (iv) this.iv = iv;
            if (sd) elm.execute(elm);
            this.timeout = setTimeout(function () { elm.execute(elm) }, this.iv);
        },
        execute: function (e) {
            if (!e.running) return false;
            e.cb();
            e.start();
        },
        stop: function () {
            this.running = false;
        },
        set_interval: function (iv) {
            clearInterval(this.timeout);
            this.start(false, iv);
        }
    };
    return timer;
}