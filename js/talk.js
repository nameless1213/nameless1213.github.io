new TypeIt("#tqylsj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("LSJ && XHSY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("我们在一起的第三年")
    .pause(3000)
    .go();

new TypeIt('#talkToLSJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();