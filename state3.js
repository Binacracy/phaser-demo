demo.state3 = function () {};
demo.state3.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#0000FF";
        console.log("state3");
        addChangeStateEventListener();
    },
    update: function () {}
};