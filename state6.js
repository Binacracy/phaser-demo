demo.state6 = function () {};
demo.state6.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#fff5e6";
        console.log("state6");
        addChangeStateEventListener();
    },
    update: function () {}
};