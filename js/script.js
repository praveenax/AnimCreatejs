var PAGE1_TEXT_1 = "Erster Akt";
var PAGE1_TEXT_2 = "Hier etwas zum Thema.\nDen Lieblingssitz auswashlen \nist so einfach wie...";

function init() {
    // code here.


}

$(document).on("ready", function () {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    var wid = window.innerWidth;
    var hei = window.innerHeight;

    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 0.2 * wid;
    circle.y = 100;
    //            stage.addChild(circle);

    var text = new createjs.Text();
    text.set({
        text: 'Hello',
        color: '#FFF',
        font: "bold 40px Dorsa"
    });

    var b = text.getBounds();

    console.log(b);
    text.x = 0.1 * wid;
    //                - b.width/2; 
    text.y = 100;
    //            - b.height/2;

    //            stage.addChild(text);

    var text2 = new createjs.Text();
    text2.set({
        text: PAGE1_TEXT_1,
        color: '#FFF',
        font: "bold 26px Dorsa"
    });
    var b2 = text2.getBounds();
    //            var b = text.getBounds();
    text2.x = 0.5 * wid - b2.width / 2;
    //                - b.width/2; 
    text2.y = 30;
    //            - b.height/2;

    stage.addChild(text2);


    var border = new createjs.Shape();
    border.graphics.beginFill("#000");
    border.graphics.drawRect(-1, -1, 152, 153);

    var container = new createjs.Container();
    container.x = 0.1 * wid;
    container.y = 65;
    container.width = 0.8 * wid;
    container.height = 40;


    var text3 = new createjs.Text();
    text3.set({
        text: PAGE1_TEXT_2,
        color: '#FFF',
        font: "italic 22px Dorsa"
    });

    text3.textAlign = "justify";

    var b3 = text3.getBounds();
    //            var b = text.getBounds();

    //            text3.setBounds(0.3 * wid, 0, 0.8 * wid, 60);
    text3.x = 0.1 * wid;
    //    text3.x = 0.5 * wid - b3.width / 2;
    //                - b.width/2; 
    //            text3.y = 80;
    //            - b.height/2;
    text3.width = 0.4 * wid;
    b3.width = 0.4 * wid;

    //            stage.addChild(text3);



    container.addChild(text3);
    stage.addChild(container);

    createjs.Tween.get(text, {
            loop: false
        })
        .to({
            x: 0.8 * wid
        }, 1000, createjs.Ease.getPowInOut(4))
        //                .to({
        //                    alpha: 0,
        //                    y: 175
        //                }, 500, createjs.Ease.getPowInOut(2))
        //                .to({
        //                    alpha: 0,
        //                    y: 225
        //                }, 100)
        //                .to({
        //                    alpha: 1,
        //                    y: 200
        //                }, 500, createjs.Ease.getPowInOut(2))
        .to({
            x: 0.1 * wid,
            y: 0.8 * hei
        }, 800, createjs.Ease.getPowInOut(2))
        .to({
            x: 0.1 * wid,
            y: 100
        }, 800, createjs.Ease.getPowInOut(2));

    stage.update();

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {

        console.log(window.innerWidth);
        $("#demoCanvas").attr("width", window.innerWidth);
        $("#demoCanvas").attr("height", window.innerHeight);

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
        // do your drawing stuff here
    }
});