demo.state2 = function () {};
demo.state2.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#FF0000";
        console.log("state2");
        addChangeStateEventListener();
    },
    update: function () {}
};