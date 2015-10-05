var mirror = document.querySelector("#codeMirror");
var editor = CodeMirror(mirror, {
    value: "forward 50\nright 90    # Rotate clockwise by 90 degrees\nforward 50\nright 90\nforward 50\nright 90\nforward 50\nright 90",
    mode: "turtle"
});
