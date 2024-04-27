(function clock() {
    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    (function loop() {
        requestAnimationFrame(loop);
        draw();
    })();

    function draw() {
        let now = new Date(),
            then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
            diffInMil = (now.getTime() - then.getTime()),
            h = (diffInMil / (1000 * 60 * 60)) % 12,
            m = (diffInMil / (1000 * 60)) % 60,
            s = (diffInMil / 1000) % 60;

        sec.style.transform = "rotate(" + (s * 6) + "deg)";
        hour.style.transform = "rotate(" + (h * 30 + (m / 2)) + "deg)";
        min.style.transform = "rotate(" + (m * 6) + "deg)";
    }
})();
