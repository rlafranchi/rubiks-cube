define('SpinnerData',['require','exports','module'],function(require, exports, module) {
    var SpinnerData = {}
    SpinnerData.cases = ['front', 'back', 'top', 'bottom', 'left', 'right', 'middleX', 'middleY', 'middleZ'];
    SpinnerData.frontSquares = [
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: 1, y: -1 }
            },
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'front',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'left',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'left',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'left',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'top',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'top',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'top',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'right',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'right',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'right',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'bottom',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'bottom',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'bottom',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
    ];
    SpinnerData.backSquares = [
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'back',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'left',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'left',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'left',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'bottom',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'bottom',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'bottom',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'right',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'right',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'right',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'top',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'top',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'top',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: -1 },
            }
        },
    ];
    SpinnerData.topSquares = [
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: 1, y: -1 }
            },
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'top',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'left',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: -1 }
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'left',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: -1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'left',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: 1 }
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'back',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: 1, y: -1 }
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'back',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: -1 }
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'back',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: -1 }
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'right',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: -1 }
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'right',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: -1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'right',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: 1 }
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'front',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: 1, y: -1 }
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'front',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: -1 }
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'front',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: -1 }
            }
        },
    ];
    SpinnerData.bottomSquares = [
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'bottom',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'left',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'left',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'left',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'front',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'front',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'front',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'right',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'right',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'right',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'back',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'back',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'back',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: 1 },
            }
        },
    ];
    SpinnerData.leftSquares = [
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'left',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'top',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'top',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'top',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'front',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'front',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'front',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'bottom',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'bottom',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'bottom',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'back',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'back',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'back',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: -1, y: -1 },
            }
        },
    ];
    SpinnerData.rightSquares = [
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: -1, y: 1 },
                toPosition: { x: -1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: -1, y: -1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: -1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'right',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'front',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'front',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'front',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'top',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'top',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'top',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'back',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'back',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'back',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'bottom',
                fromPosition: { x: 1, y: 1 },
                toPosition: { x: 1, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'bottom',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'bottom',
                fromPosition: { x: 1, y: -1 },
                toPosition: { x: 1, y: -1 },
            }
        },
    ];
    SpinnerData.middleYSquares = [
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'left',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'left',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'left',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'front',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: -1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'front',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'front',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'right',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'right',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'right',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'back',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 1, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'back',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'back',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: -1, y: 0 },
            }
        },
    ];
    SpinnerData.middleXSquares = [
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'front',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'front',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'front',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'top',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'top',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'front',
                toSide: 'top',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'back',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: -1 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'back',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'back',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'bottom',
                fromPosition: { x: 0, y: 1 },
                toPosition: { x: 0, y: 1 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'bottom',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 },
            }
        },
        {
            clockwise: {
                fromSide: 'back',
                toSide: 'bottom',
                fromPosition: { x: 0, y: -1 },
                toPosition: { x: 0, y: -1 },
            }
        },
    ];
    SpinnerData.middleZsquares = [
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'left',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: -1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'left',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'bottom',
                toSide: 'left',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'top',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'top',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'left',
                toSide: 'top',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: -1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'right',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: -1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'right',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'top',
                toSide: 'right',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: 1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'bottom',
                fromPosition: { x: -1, y: 0 },
                toPosition: { x: 1, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'bottom',
                fromPosition: { x: 0, y: 0 },
                toPosition: { x: 0, y: 0 }
            }
        },
        {
            clockwise: {
                fromSide: 'right',
                toSide: 'bottom',
                fromPosition: { x: 1, y: 0 },
                toPosition: { x: -1, y: 0 }
            }
        },
    ];


    module.exports = SpinnerData;
});
