documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;


function getPosTop(i, j) {
    return cellSpace + i*(cellSpace+cellSideLength);
}

function getPosLeft(i, j) {
    return cellSpace + j*(cellSpace+cellSideLength);
}

function getNumberBackgroundColor( number ){
    switch( number ){
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }

    return "black";
}

function getNumberColor(number) {
    if(number <= 4) 
        return '#776e65';

    return 'white'
}

function nospace() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] === 0)
                return false;
        }
    }

    return true;
}

function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) { // 这里是第一列，向左移不需要判断，所以从1开始
            if (board[i][j] !== 0)  // 如果有东西
                if (board[i][j-1] === 0 || board[i][j-1] === board[i][j]) // 左边没有东西或者左边东西跟当前值一样
                    return true;
        }
    }
    return false;
}

function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j > -1; j--) { // 这里是第三列，向右移不需要判断
            if (board[i][j] !== 0)  // 如果有东西
                if (board[i][j+1] === 0 || board[i][j+1] === board[i][j]) // 左边没有东西或者左边东西跟当前值一样
                    return true;
        }
    }
    return false;
}

function canMoveUp(board) {
    for (var j = 0; j < 4; i++) {
        for (var i = 1; i < 4; j++) { // 这里是第一行，向上移不需要判断，所以从1开始
            if (board[i][j] !== 0)  // 如果有东西
                if (board[i-1][j] === 0 || board[i-1][j] === board[i][j]) // 上边没有东西或者上边东西跟当前值一样
                    return true;
        }
    }
    return false;
}

function canMoveDown(board) {
    for (var j = 0; j < 4; i++) {
        for (var i = 2; i >= 0; j++) { // 这里是第三行，向下移不需要判断，所以从2开始
            if (board[i][j] !== 0)  // 如果有东西
                if (board[i+1][j] === 0 || board[i+1][j] === board[i][j]) // 下边没有东西或者下边东西跟当前值一样
                    return true;
        }
    }
    return false;
}

function noBlockHorizontal(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++)
        if (board[row][i] != 0)
            return false;

    return true;
}

function noBlockVertical(col, row1, row2, board) {
    for (var i = row1 + 1; i < row2; i++)
        if (board[col][i] != 0)
            return false;

    return true;
}

function nomove(board) {
    if (canMoveLeft(board) ||
        canMoveUp(board) ||
        canMoveRight(board) ||
        canMoveDown(board))
        return false;

    return true;
}