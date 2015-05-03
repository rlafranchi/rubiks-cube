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
    var smallQuaternion = new Quaternion(185, 1, 1, 1);
    var frontQuaternion = new Quaternion(180, 0, 0, 0);
    var newQuaternion = new Quaternion(1,0,1,1);

    var rotationModifier = new Modifier({
        origin: [.5, .5],
        align: [.5, .5]
    });

    var frontRotationModifier = new Modifier({
        origin: [.5, .5],
        align: [.5, .5]
    });


    // Bind the box's rotation to the quaternion
    rotationModifier.transformFrom(function() {
        return quaternion.getTransform();
    });

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
        smallQuaternion = new Quaternion(-1, 0, 0, 0);
        //quaternion = newQuaternion;
    });

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
        var surfaces = [];
        var modifiers = [];
        var modifiersTwo = [];
        for (var color in colors) {
            for (var i = 0; i < 8; i++ ) {
                total_colors.push(colors[color]);
            }
        }

        function getRandomFromBucket(array) {
            var randomIndex = Math.floor(Math.random()*array.length);
            return array.splice(randomIndex, 1)[0];
        }

        function faceTransform(position, side) {
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

            surface.on('click', function() {
                //spin(true, 'front');
                //spin(true, 'back');
//                spin(true, 'front');
//                spin(true, 'bottom');
//                spin(true, 'top');
//                spin(true, 'back');
                spin(true, 'middleTopBottom');
            });
        };

        function spin(clockwise, spinCase) {
            for ( var surface in surfaces ) {
                var surf = surfaces[surface];
                var surfData = surf.properties.data;
                var position, oppositeSide, squares;

                switch(spinCase) {
                    case 'front':
                        oppositeSide = 'back';
                        squares = SpinnerData.frontSquares;
                        break;
                    case 'back':
                        oppositeSide = 'front';
                        squares = SpinnerData.backSquares;
                        break;
                    case 'top':
                        oppositeSide = 'bottom';
                        squares = SpinnerData.topSquares;
                        break;
                    case 'bottom':
                        oppositeSide = 'top';
                        squares = SpinnerData.bottomSquares;
                        break;
                    case 'left':
                        oppositeSide = 'right';
                        squares = SpinnerData.leftSquares;
                        break;
                    case 'right':
                        oppositeSide = 'left';
                        squares = SpinnerData.rightSquares;
                        break;
                    case 'middleLeftRight':
                        squares = SpinnerData.middleLeftRightSquares;
                        break;
                    case 'middleTopBottom':
                        squares = SpinnerData.middleTopBottomSquares;
                        break;

                }


                // Front Clockwise
                var rotation;
                for ( var square in squares ) {
                    if ( surfData.position.x == squares[square].clockwise.fromPosition.x && surfData.position.y == squares[square].clockwise.fromPosition.y && surfData.side == squares[square].clockwise.fromSide ) {
                        setSpin(squares[square], surfData, surf, surface);
                        break;
                    }
                }
            }
        };

        function setSpin(square, surfData, surf, surface) {
            surfData.position = square.clockwise.toPosition;
            surfData.side = square.clockwise.toSide;
            var position = surfData.position;
            surf.setContent('x: ' + position.x + 'y: ' + position.y + ', ' + surfData.side);
            modifiers[surface].setTransform(faceTransform(position, surfData.side), {duration: 500});
        };

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
                createSide({
                    content: 'x: ' + positions[i].x + 'y: ' + positions[i].y + ', ' + sides[side],
                    size: [width/3, height/3],
                    properties: {
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


