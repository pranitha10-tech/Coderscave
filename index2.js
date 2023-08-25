function run() {
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = document.getElementById("cssCode").value;
    let jsCode = document.getElementById("jsCode").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

document.getElementById("htmlCode").addEventListener("keydown", function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});
document.getElementById("cssCode").addEventListener("keydown", function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});
document.getElementById("jsCode").addEventListener("keydown", function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});

const closeBraces = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['<', '>'],
    ['"', '"'],
    ["'", "'"]
]);

ta = document.getElementById("htmlCode");

ta.addEventListener("input", function (e) {

    const pos = e.target.selectionStart;
    const val = [...e.target.value];

    const char = val.slice(pos - 1, pos)[0];
    const closeB = closeBraces.get(char);

    if (closeB) {
        val.splice(pos, 0, closeB);
        e.target.value = val.join('');
        e.target.selectionEnd = pos;
    }
});
ta = document.getElementById("jsCode");

ta.addEventListener("input", function (e) {

    const pos = e.target.selectionStart;
    const val = [...e.target.value];

    const char = val.slice(pos - 1, pos)[0];
    const closeB = closeBraces.get(char);

    if (closeB) {
        val.splice(pos, 0, closeB);
        e.target.value = val.join('');
        e.target.selectionEnd = pos;
    }
});

ta = document.getElementById("cssCode");

ta.addEventListener("input", function (e) {

    const pos = e.target.selectionStart;
    const val = [...e.target.value];

    const char = val.slice(pos - 1, pos)[0];
    const closeB = closeBraces.get(char);

    if (closeB) {
        val.splice(pos, 0, closeB);
        e.target.value = val.join('');
        e.target.selectionEnd = pos;
    }
});

document.getElementById("d1").onclick = function () {
    var x1 = document.createElement("a");

    x1.href = "data:text/plain;charset=UTF-8," + document.getElementById("htmlCode").value;

    x1.setAttribute("download", document.getElementById("df1").value);

    x1.click();
}
document.getElementById("d2").onclick = function () {
    var x2 = document.createElement("a");

    x2.href = "data:text/plain;charset=UTF-8," + document.getElementById("cssCode").value;
    
    x2.setAttribute("download", document.getElementById("df2").value);

    x2.click();
}
document.getElementById("d3").onclick = function () {
    var x3 = document.createElement("a");

    x3.href = "data:text/plain;charset=UTF-8," + document.getElementById("jsCode").value;

    x3.setAttribute("download", document.getElementById("df3").value);

    x3.click();
}


function goFullscreen(id) {
    var element = document.getElementById(id);

    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();

    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}