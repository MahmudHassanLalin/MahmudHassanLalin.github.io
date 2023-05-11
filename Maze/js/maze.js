var isStart = false;
$(document).ready(function () {
    $('#start').on('click', function () {
        isStart = true;
        $('.boundary').removeClass('youlose');
        $('#status').text('Click the "S" to begin.');
    });
    $('.boundary,body').on('mouseover', function (e) {
        e.stopPropagation();
        if (isStart == true) {
            gameOver();
            //setTimeout(function(){
              //  alert('Sorry, you lost. :[');
            //},50);
            
        };
    });
    $('#maze').on('mouseover', function (e) {
        e.stopPropagation();
    });
    $('#end').on('mouseover', function () {
        if (isStart == true) {
            isStart = false;
            $('#status').text('You win! :]');
            //alert('You win! :]');
        };
    });
});
function gameOver()
{
    $('.boundary').addClass('youlose');
    isStart = false;
    $('#status').text('Sorry, you lost. :[');
}