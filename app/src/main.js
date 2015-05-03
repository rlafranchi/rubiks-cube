/**
 * Copyright (c) 2015 Famous Industries, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * @license MIT
 */


/**
 * Rotating Box
 * ----------
 * You can define a rotation as the (noncommutative) multiplication
 * of two Quaternions. When you do this, the first quaternion has
 * the rotation described by the second quaternion added to it.
 *
 * In this example, we have two quaternions, one that defines the box's
 * current rotation, and another which defines a rotation to be added
 * to the box.
 */
define(function(require, exports, module) {
    var Engine     = require('famous/core/Engine');
    var Surface    = require('famous/core/Surface');
    var Modifier   = require('famous/core/Modifier');
    var Transform  = require('famous/core/Transform');
    var RenderNode = require('famous/core/RenderNode');
    var Quaternion = require('famous/math/Quaternion');
    var Vector     = require('famous/math/Vector');
    var MouseSync = require("famous/inputs/MouseSync");
    var ScrollSync = require("famous/inputs/ScrollSync");
    var SpinnerData = require('SpinnerData');
    //debugger;

    var mainContext = Engine.createContext();

    // The axis of the rotation is a Left Hand Rule vector with X Y Z (i j k) components
    // [ 1,  0,  0, 0] Front
    // [ 1,  0, -1, 0] Left
    // [ 1,  0,  1, 0] Right
    // [ 0,  0,  0, 0] Back
    // [ 1,  1,  0, 0] Top
    // [ 0,  0,  1, 1] Bottom
    var quaternion = new Quaternion(1, 1, 1, 0);
    var smallQuaternion = new Quaternion(-1, 0, 0, 0);

    var rotationModifier = new Modifier({
        origin: [.5, .5],
        align: [.5, .5]
    });

    var surfaces = [];
    var modifiers = [];

    var infoSurface = new Surface({
        size: [250, 24],
        content: "Built on <a href='https://famo.us' target='_blank'>famo.us</a> | <a href='https://github.com/rlafranchi/rubiks-cube' target='_blank'>Source on Github</a>"
    });

    var infoModifier = new Modifier({
        origin: [1, 0],
        align: [1, 0],
    });

    var shuffleSurface = new Surface({
        size: [180, 24],
        content: 'SHUFFLE',
        classes: ["spinner-btn"],
        properties: {
            padding: '3px',
            border: '2px solid black',
            borderRadius: '5px',
            cursor: 'pointer',
        }
    });

    var shuffleModifier = new Modifier({
        transform: Transform.translate(2, 2, 0)
    });

    mainContext.add(shuffleModifier).add(shuffleSurface);
    mainContext.add(infoModifier).add(infoSurface);

    shuffleSurface.on('click', function() {
        var randomFlip;
        var clockwise;
        for ( var i = 0; i < 100; i++ ) {
            randomFlip = SpinnerData.cases[Math.floor(Math.random() * SpinnerData.cases.length)];
            clockwise = [true, false][Math.floor(Math.random() * 2)];
            Spin(clockwise, randomFlip, 50);
        }
    });

    // Bind the box's rotation to the quaternion
    rotationModifier.transformFrom(function() {
        return quaternion.getTransform();
    });

    var start = 0;
    var update = 0;
    var end = 0;

    var delta = [0,0];
    var position = [0, 0];
    var mouseSync = new MouseSync();
    var scrollSync = new ScrollSync();

    Engine.pipe(mouseSync);
    Engine.pipe(scrollSync);

    mainContext.add(rotationModifier)
               .add(createBox(260, 260, 260));

    // This is where the rotation is created
    Engine.on('prerender', function() {
        // You combine rotations through quaternion multiplication
        quaternion = quaternion.multiply(smallQuaternion);
    });

    Engine.on('click', function() {
        //var x = (Math.random() * 2) - 1;
        //var y = (Math.random() * 2) - 1;
        //var z = (Math.random() * 2) - 1;
        //smallQuaternion = new Quaternion(185, x, y, z);
        //smallQuaternion = new Quaternion(185, 0, 0, 0);
        //quaternion = newQuaternion;
    });

    mouseSync.on("start", function() {
        position = [0, 0];
    });

    mouseSync.on("update", function(data) {
        position = data.position;
        delta = data.delta;
        smallQuaternion = new Quaternion(90, -delta[0]/10, delta[1]/10, -delta[1]/10)
    });

    mouseSync.on("end", function() {
        //smallQuaternion.clear();
        smallQuaternion = new Quaternion(-1, 0, 0, 0);
    });

    scrollSync.on("start", function() {
        position = [0, 0];
    });

    scrollSync.on("update", function(data) {
        position = data.position;
        delta = data.delta;
        smallQuaternion = new Quaternion(90, -delta[0]/10, delta[1]/10, -delta[1]/10)
    });

    scrollSync.on("end", function() {
         smallQuaternion = new Quaternion(-1, 0, 0, 0);
    });

    for ( var i = 0; i < 2; i++ ) {
        var clockwise;
        if ( i == 0 ) {
            clockwise = true;
        } else {
            clockwise = false;
        }
        var direction = clockwise ? ' | <small>clockwise</small>' : ' | <small>counter-clockwise</small>' ;
        for ( var spinCase in SpinnerData.cases ) {
            var spinSurface = new Surface({
                size: [180, 24],
                content: SpinnerData.cases[spinCase] + direction ,
                classes: ["spinner-btn"],
                properties: {
                    padding: '3px',
                    border: '2px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    data: {
                        case: SpinnerData.cases[spinCase],
                        clockwise: clockwise,
                    }
                }
            });

            var spinModifier = new Modifier({
                transform: Transform.translate(2 + (i * 182), 26 + (2 + (2 + 24) * spinCase), 0)
            });

            spinSurface.on('click', function() {
                Spin(this.properties.data.clockwise, this.properties.data.case, 500);
            });

            mainContext.add(spinModifier).add(spinSurface);
        }

    }


    var Spin = function(clockwise, spinCase, duration) {
        //debugger;
        for ( var surface in surfaces ) {
            var surf = surfaces[surface];
            var surfData = surf.properties.data;
            var position, oppositeSide, squares;

            switch(spinCase) {
                case 'front':
                    squares = SpinnerData.frontSquares;
                    break;
                case 'back':
                    squares = SpinnerData.backSquares;
                    break;
                case 'top':
                    squares = SpinnerData.topSquares;
                    break;
                case 'bottom':
                    squares = SpinnerData.bottomSquares;
                    break;
                case 'left':
                    squares = SpinnerData.leftSquares;
                    break;
                case 'right':
                    squares = SpinnerData.rightSquares;
                    break;
                case 'middleX':
                    squares = SpinnerData.middleXSquares;
                    break;
                case 'middleY':
                    squares = SpinnerData.middleYSquares;
                    break;
                case 'middleZ':
                    squares = SpinnerData.middleZsquares;
                    break;
            }

            var fromPosition;
            var fromSide;
            for ( var square in squares ) {
                if ( clockwise == true ) {
                    fromPosition = squares[square].clockwise.fromPosition;
                    fromSide = squares[square].clockwise.fromSide;
                } else {
                    fromPosition = squares[square].clockwise.toPosition;
                    fromSide = squares[square].clockwise.toSide;
                }
                if ( surfData.position.x == fromPosition.x && surfData.position.y == fromPosition.y && surfData.side == fromSide ) {
                    setSpin(squares[square], surfData, surf, surface, clockwise, duration);
                    break;
                }
            }
        }
    };

    var setSpin = function(square, surfData, surf, surface, clockwise, duration) {
        if ( clockwise == true ) {
            surfData.position = square.clockwise.toPosition;
            surfData.side = square.clockwise.toSide;
        } else {
            surfData.position = square.clockwise.fromPosition;
            surfData.side = square.clockwise.fromSide;
        }
        var position = surfData.position;
        if ( position.x == 0 && position.y == 0 ) {
            surfaces[surface].setContent(surfData.side);
        }
        modifiers[surface].setTransform(faceTransform(position, surfData.side), {duration: duration});
    };

    function faceTransform(position, side) {
        var width, height, depth;
        width = 260;
        height = 260;
        depth = 260;
        switch(side) {
            case 'front':
                return Transform.translate(position.x * (width/3), position.y * (height/3), depth / 2);
                break;
            case 'back':
                return Transform.multiply(Transform.translate(position.x * (width/3), position.y * (height/3), - depth / 2), Transform.multiply(Transform.rotateZ(Math.PI), Transform.rotateX(Math.PI)));
                break;
            case 'top':
                return Transform.multiply(Transform.translate(position.x * (width/3), -height / 2, position.y * (height/3)), Transform.rotateX(Math.PI/2));
                break;
            case 'bottom':
                return Transform.multiply(Transform.translate(position.x * (width/3), height / 2, position.y * (height/3)), Transform.multiply(Transform.rotateX(-Math.PI/2), Transform.rotateZ(Math.PI)));
                break;
            case 'left':
                return Transform.multiply(Transform.translate(-width / 2, position.x * (width/3), position.y * (height/3)), Transform.rotateY(-Math.PI/2));
                break;
            case 'right':
                return Transform.multiply(Transform.translate(width / 2, position.x * (width/3), position.y * (height/3)), Transform.rotateY(Math.PI/2));
                break;
        }
    };

    // Creates box renderable
    function createBox(width, height, depth) {
        var box = new RenderNode();
        var positions = [
            { x: -1, y: -1 },
            { x:  0, y: -1 },
            { x:  1, y: -1 },
            { x: -1, y:  0 },
            { x:  0, y:  0 },
            { x:  1, y:  0 },
            { x: -1, y:  1 },
            { x:  0, y:  1 },
            { x:  1, y:  1 },
        ];

        var sides = [ 'front', 'back', 'top', 'bottom', 'left', 'right' ];
        var colors = [ 'red', 'green', 'blue', 'yellow', 'orange', 'white'];
        var total_colors = [];
        for (var color in colors) {
            for (var i = 0; i < 8; i++ ) {
                total_colors.push(colors[color]);
            }
        }

        function getRandomFromBucket(array) {
            var randomIndex = Math.floor(Math.random()*array.length);
            return array.splice(randomIndex, 1)[0];
        }

        function createSide(params){
            var surface = new Surface({
                size: params.size,
                content: params.content,
                classes: params.classes,
                properties: params.properties,
            });

            surfaces.push(surface);

            var modifier = new Modifier({
                transform: params.transform
            });

            modifiers.push(modifier);

            box.add(modifier).add(surface);
        };

        var content;

        for (var side in sides) {
            for (var i=0; i<9; i++) {
                var color;
                var transform;
                switch(sides[side]) {
                    case 'front':
                        color = 'red';
                        break;
                    case 'back':
                        color = 'orange';
                        break;
                    case 'top':
                        color = 'white';
                        break;
                    case 'bottom':
                        color = 'yellow';
                        break;
                    case 'left':
                        color = 'green';
                        break;
                    case 'right':
                        color = 'blue';
                        break;
                };
                if ( positions[i].x == 0 && positions[i].y == 0 ) {
                    content = sides[side];
                } else {
                    content = '';
                }
                createSide({
                    content: content,
                    size: [width/3, height/3],
                    properties: {
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        backgroundColor: color,
                        border: '3px solid black',
                        data: {
                            side: sides[side],
                            index: i,
                            position: positions[i],
                        },
                    },
                    transform: faceTransform(positions[i], sides[side]),
                    position: positions[i],
                });
            }
        }


        return box;
    }
});


