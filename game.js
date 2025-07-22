const extension_url = "https://25yt551.github.io/wormt-r/game";

function wormworld_script() {
    var script2 = document.createElement('script');
    var timestamp = new Date().getTime();
    script2.src = extension_url + '?v=' + timestamp;
    document.head.appendChild(script2);
}

wormworld_script();
