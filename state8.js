demo.state8 = function () {};
demo.state8.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#6666ff";
        console.log("state8");
        addChangeStateEventListener();
    },
    update: function () {}
};