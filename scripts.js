var tooltipSpan = document.getElementById('details-box');

document.addEventListener('mouseover', function (c) {
    if (c.target.tagName == 'path') {
        var content = c.target.dataset.name;
        if(content == undefined){
            content = " ";
        }
        document.getElementById("details-box").innerHTML = content;
        document.getElementById("details-box").style.opacity = "100%";
    }
    else {
        document.getElementById("details-box").style.opacity = "0%";
    }
});

window.onmousemove = function (c) {
    var x = c.clientX,
        y = c.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x) + 'px';
};
