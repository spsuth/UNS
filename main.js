/**
 * Created by Sam Desktop on 6/10/2014.
 */
var canvas;
var stage;
var bg;

function init(){
     canvas = document.getElementById("canvas");
     stage = new createjs.Stage(canvas);

    bg = new Image();
    bg.src = "img/background.png";
    bg.onload = setImg;
    stage.update();


    var image = new createjs.Image();
    image.src = "img/Ball.png";
    image.onload = createBalls;
 }

function createBalls(event){
    var image = event.target;
    var container = new createjs.Container();
    stage.addChild(container);
    var l = 5;
    bmpList=[];
    for (var i = 0; i<l; i++){

    }
}