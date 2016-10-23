function Text(prop) {
    var text_var = new createjs.Text();

    text_var.set(prop);



    return text_var;
}



function Circle(prop) {
    //    var circle = new createjs.Text();

    var circle = new createjs.Shape();

    circle.graphics.beginFill(prop["fill"]).beginStroke("#000").drawCircle(prop["x"], prop["y"], prop["r"]);
    //    circle.x = 0.2 * wid;
    //    circle.y = 100;

    //    circle.set(prop);



    return circle;
}

function getRand(min, max) {
    return Math.floor(Math.random() * max) + min;
}