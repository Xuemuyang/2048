function showNumberWithAnimation(i, j, randNumber) {

    var theNumberCell = $(`#number-cell-${i}-${j}`);

    theNumberCell.css('background-color', getNumberBackgroundColor(randNumber));
    theNumberCell.css('color', getNumberColor(randNumber));
    theNumberCell.text(randNumber);

    theNumberCell.animate({
        width: cellSideLength,
        height: cellSideLength,
        top: getPosTop(i, j),
        left: getPosLeft(i, j),
    }, 50);
}

function showMoveAnimation(fromx, fromy, tox, toy) {
    var numberCell = $(`#number-cell-${fromx}-${fromy}`);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy),
    }, 200);
}

function updateScore(score) {
    $('#score').text(score);
}