
window.onload = function() {
    addEvent(window, "mousemove", onMove);
};

function addEvent(eventTarget, eventType, eventHandler) {
    if (eventTarget.addEventListener) {
        eventTarget.addEventListener(eventType, eventHandler, false);
    } else if (eventTarget.attachEvent) {
        eventTarget.attachEvent('on' + eventType, eventHandler);
    } else {
        eventTarget['on' + eventType] = eventHandler;
    }
}

function onMove(event) {
    var range = [60, 80, 140, 160];
    var distanceheight = [];
    var distancewidth = [];
    var midwidth = window.innerWidth / 2;
    var midheight = window.innerHeight / 2;
    var i = 0;
    while (i < 5) {
        var ratiow = range[i] / window.innerWidth;
        var ratioh = range[i] / window.innerHeight;
        distancewidth[i] = (0 - (event.screenX - midwidth)) * ratiow;
        distanceheight[i] = (0 - (event.screenY - midheight)) * ratioh;
        i += 1;
    }
    var layers = ['#img-1 img', '#img-2 img', '#img-3 img', '#img-4 img'];
    for (i = 0; i < layers.length; i += 1) {
        var layer = document.querySelector(layers[i]);
        layer.style.marginLeft = distancewidth[i] + 'px';
        layer.style.marginTop = distanceheight[i] + 'px';
    }
}