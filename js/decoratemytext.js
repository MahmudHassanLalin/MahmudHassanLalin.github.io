
//alert("Hello, world!"); 

$(document).ready(() => {
    {
        //$("#btnDecor").on('click',changeTextAreaFontSize);
        $("#btnDecor").on('click', () => {
            setInterval(changeTextAreaFontSize, 500)
        });
        //$("#btnDecor").on('click',getAlert);
        //$('#blink').on('change',getAlert);
        $('#blink').on('change', chkOnchange);
    }
});

function getAlert() {
    alert("Hello, world!");
}
function changeTextAreaFontSize() {

    var mltText = $("#mltText");
    var currentSize = mltText.css('font-size');
    currentSize = parseInt(currentSize) + 2;
    mltText.css('font-size', currentSize);
}

function chkOnchange() {
    var mltText = document.getElementById("mltText");
    if ($(this).is(":checked")) {
        mltText.style.fontWeight = "bold";
        mltText.style.color = "green";
        mltText.style.textDecoration = "underline";
        var imageUrl =
            "https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
        $('body').css("background-image", "url(" + imageUrl + ")");
    }
    else {
        mltText.style.fontWeight = "normal";
        mltText.style.color = "inherit";
        mltText.style.textDecoration = "inherit";
        $('body').css("background-image", "none");
    }
}