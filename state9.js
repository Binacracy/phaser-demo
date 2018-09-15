demo.state9 = function () {};
demo.state9.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#ff66ff";
        console.log("state9");
        addChangeStateEventListener();
    },
    update: function () {}
};