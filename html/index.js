function yordishowNotify(t) {
    "yordi" === t.type && yordinotifyStart(t)
}

function yordinotifyStart(t) {
    document.querySelector(".yordi-base").style.visibility = "visible", document.querySelector(".yordi-title").textContent = t.title, document.querySelector(".yordi-location-text").textContent = t.text, setTimeout(() => {
        document.querySelector(".yordi-base").style.visibility = "hidden"
    }, 5e3)
}

window.addEventListener("message", function(t) {
    yordishowNotify(t.data)
});
