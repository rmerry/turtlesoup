import create as canvasCore from './graphics/canvas_lib';

main();

let main = function () {

  initialiseEditor();
  initialiseGraphics();
};

let initialiseEditor = function () {

  let mirror = document.querySelector("#codeMirror");
  let editor = CodeMirror(mirror, {
      value: "forward 50\nright 90    # Rotate clockwise by 90 degrees\nforward 50\nright 90\nforward 50\nright 90\nforward 50\nright 90",
      mode: "turtle"
  });
};

let initialiseGraphics = function () {

  let context = document.querySelector("#playPen");
  canvasCore.create(context);
};

