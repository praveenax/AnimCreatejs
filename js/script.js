function init() {
    // code here.


}

var stage;
var wid;
var hei;

$(document).on("ready", function () {
    stage = new createjs.Stage("canvas");
    var circle = new createjs.Shape();
    wid = window.innerWidth;
    hei = window.innerHeight;

    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 0.2 * wid;
    circle.y = 100;
    //            stage.addChild(circle);




    var t1 = new createjs.Text();

    t1.set({
        text: 'Hello',
        color: '#FFF',
        font: "bold 40px Dorsa"
    });


    var b = t1.getBounds();

    console.log(b);
    t1.x = 0.1 * wid;
    //                - b.width/2; 
    t1.y = 100;
    //            - b.height/2;

    //    stage.addChild(t1);
    var text2 = new Text({
        text: PAGE1_TEXT_1,
        color: '#FFF',
        font: "bold 26px Dorsa"
    });


    console.log(text2);
    var b2 = text2.getBounds();


    text2.x = 0.5 * wid - b2.width / 2;
    text2.y = 30;

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
    //    text3.width = 0.4 * wid;
    b3.width = 0.4 * wid;

    stage.addChild(text3);



    container.addChild(text3);
    stage.addChild(container);

    var container3 = new createjs.Container();

    for (var i = 0; i < test_data["categories"].length; i++) {

        var tmp_radius = 40;
        var circle_prop = {
            "fill": "#fff",
            "x": 0,
            "y": 0,
            "r": tmp_radius
        };
        var c1 = new Circle(circle_prop);

        var diff_i = i / 3;
        var perc_i = i % 2;
        c1.x = 0.2 * wid + tmp_radius * 3.5 * diff_i;
        c1.y = 0.3 * hei + tmp_radius * 3.5 * perc_i;

        //        if (c1.x + tmp_radius * 2 > wid) {
        //            c1.x = 0.1 * getRand(1, 3) * wid + tmp_radius * 2;
        //        }
        //
        //        if (c1.y + tmp_radius * 2 > hei) {
        //            c1.y = 0.3 * getRand(1, 3) * hei + tmp_radius * 2;
        //        }


        var ct1 = new createjs.Text();

        ct1.set({
            text: test_data["categories"][i],
            color: '#990066',
            font: "bold 16px Dorsa"
        });


        var cb = ct1.getBounds();

        console.log(cb);
        ct1.x = c1.x - cb.width / 2;
        //                - b.width/2; 
        ct1.y = c1.y - cb.height / 2;
        //            - b.height/2;

        //    stage.addChild(t1);



        var container2 = new createjs.Container();
        container2.x = 0.1 * wid;
        container2.y = 0;
        container2.width = 0.8 * wid;
        container2.height = 40;

        container2.addChild(c1, ct1);
        container3.addChild(container2);

    }


    stage.addChild(container3);

    //    createjs.Tween.get(c1, {
    //            loop: false
    //        })
    //        .to({
    //            x: 0.5 * wid
    //        }, 1000, createjs.Ease.getPowInOut(4))
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
    //        .to({
    //            x: 0.1 * wid,
    //            y: 0.6 * hei
    //        }, 800, createjs.Ease.getPowInOut(2))
    //        .to({
    //            x: 0.1 * wid,
    //            y: 100
    //        }, 800, createjs.Ease.getPowInOut(2));

    stage.update();

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {

        console.log(window.innerWidth);
        $("#canvas").attr("width", window.innerWidth);
        $("#canvas").attr("height", window.innerHeight);


        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {

    }
});