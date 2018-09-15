demo.state7 = function () {};
demo.state7.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#ff9900";
        console.log("state7");
        addChangeStateEventListener();
    },
    update: function () {}
};