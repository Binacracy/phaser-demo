var demo = {};
demo.state1 = function () {};
demo.state1.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#dddddd";
        console.log("state1");
    },
    update: function () {}
};