demo.state4 = function () {};
demo.state4.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#ccff33";
        console.log("state4");
        addChangeStateEventListener();
    },
    update: function () {}
};