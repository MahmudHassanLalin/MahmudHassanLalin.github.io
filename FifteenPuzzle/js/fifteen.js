const emptyTile = {};
const init = function () {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];

        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;
    }
    var lastElem = divs[divs.length - 1];
    var width = parseInt($(lastElem).css('width')) + parseInt($(lastElem).css('border-left-width'))
        + parseInt($(lastElem).css('border-right-width'));
    var height = parseInt($(lastElem).css('height')) + parseInt($(lastElem).css('border-top-width'))
        + parseInt($(lastElem).css('border-bottom-width'));
    emptyTile.x = lastElem.x + width;
    emptyTile.y = lastElem.y;
    emptyTile.width = width;
    emptyTile.height = height;
    $('.movablepiece').removeClass('movablepiece');
};
$(document).ready(() => {
    init();
    $('#shufflebutton').on('click', sufflePuzzle);
    $('.puzzlepiece').on('mouseover', (e) => {
        if (isEmptyTileNeighbour(e.target)) {
            if (!$(e.target).hasClass('movablepiece'))
                $(e.target).addClass('movablepiece');
        }
        else {
            $(e.target).removeClass('movablepiece');
        }
    });
    $(document).on('click','.movablepiece', (e) => {
        var elem = e.target;
        var width = parseInt($(elem).css('width'));
        var height = $(elem).css('height');
        var borderWidth = $(elem).css('border-width');
        width = parseInt(width) + 2 * parseInt(borderWidth);
        height = parseInt(height) + 2 * parseInt(borderWidth);
        var x = parseInt($(elem).css('left'));
        var y = parseInt($(elem).css('top'));
        $(elem).css('top', emptyTile.y);
        $(elem).css('left', emptyTile.x);
        elem.x=parseInt($(elem).css('left'));
        elem.y=parseInt($(elem).css('top'));
        emptyTile.x = x;
        emptyTile.y = y;
        emptyTile.width = width;
        emptyTile.height = height;
        $('.movablepiece').removeClass('movablepiece');
    })
});
Array.prototype.shuffle = function () {
    let m = this.length, i;
    while (m) {
        i = (Math.random() * m--) >>> 0;
        [this[m], this[i]] = [this[i], this[m]]
    }
    return this;
};
const sufflePuzzle = () => {
    init();
    var array = [];
    for (var i = 1; i <= 15; i++)array.push(i);
    array.shuffle();
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        var current = $($('.puzzlepiece')[i]);
        var item = getItem(array[i]);
        var swap = item.item;
        var currentTop = current.css('top');
        var currentLeft = current.css('left');
        current.css('top', swap.css('top'));
        current.css('left', swap.css('left'));
        swap.css('top', currentTop);
        swap.css('left', currentLeft);
    }
  

}
const tilePosition = [];
const getItem = (val) => {
    var pieces = $('.puzzlepiece');
    for (var i = 0; i < pieces.length; i++) {
        if ($(pieces[i]).text() == String(val)) {
            return { item: $(pieces[i]), index: i };
        }
    }
}

const isEmptyTileNeighbour = (elem) => {
    var width = parseInt($(elem).css('width'));
    var height = $(elem).css('height');
    var borderWidth = $(elem).css('border-width');
    width = parseInt(width) + 2 * parseInt(borderWidth);
    height = parseInt(height) + 2 * parseInt(borderWidth);
    var x = parseInt($(elem).css('left'));
    var y = parseInt($(elem).css('top'));
    if ((emptyTile.x == x + width && emptyTile.y == y)
        || (emptyTile.x == x - width && emptyTile.y == y)
        || (emptyTile.x == x && emptyTile.y == y - height)
        || (emptyTile.x == x && emptyTile.y == y + height))
        return true;
    return false;
}