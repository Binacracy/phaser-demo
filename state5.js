demo.state5 = function () {};
demo.state5.prototype = {
    preload: function () {},
    create: function () {
        this.game.stage.backgroundColor = "#ccffcc";
        console.log("state5");
        addChangeStateEventListener();
    },
    update: function () {}
};