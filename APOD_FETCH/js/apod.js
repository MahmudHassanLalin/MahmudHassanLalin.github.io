async function getPicture() {
    // $.ajax({
    //     url: "https://api.nasa.gov/planetary/apod",
    //     type: "GET",
    //     data: {
    //         api_key: "VMul3fh7J5zOErdwcSIFZLaMplUipnCqFJIzhUmO",
    //         date: $("#date").val()
    //     },
    //     dataType: "json",
    //     "success": showPicture,
    //     "error": noPicture
    // });

var response=  fetch("https://api.nasa.gov/planetary/apod?"+new URLSearchParams({
            api_key: "VMul3fh7J5zOErdwcSIFZLaMplUipnCqFJIzhUmO",
            date: $("#date").val()
        })
    ).then(response=>{
        return response.json();
    }).then(data=>showPicture(data));
};
function showPicture(data) {
    $("#pic").attr("src", data.url);
    $('#title').text(data.title);
};
function noPicture(error) {
    alert(error.responseText);
};
$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
