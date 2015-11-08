import { gfxlib } from './graphics/canvas_lib.js';

(function () {

  let g;

  let initialiseEditor = function () {

    let mirror = document.querySelector("#codeMirror");
    let editor = CodeMirror(mirror, {
        value: "forward 50\nright 90    # Rotate clockwise by 90 degrees\nforward 50\nright 90\nforward 50\nright 90\nforward 50\nright 90",
        mode: "turtle"
    });
  };

  let initialiseGraphics = function () {

    let context = document.querySelector("#playPen");
    return gfxlib(context);
  };

  let plotPixels = function () {

    g.plot({ x: 0, y: 0 });
    g.plot({ x: 1, y: 1 });
    g.plot({ x: 2, y: 2 });
    g.plot({ x: 3, y: 3 });
    g.plot({ x: 4, y: 4 });
    g.plot({ x: 5, y: 5 });
    g.plot({ x: 6, y: 6 });
    g.plot({ x: 7, y: 7 });
    g.plot({ x: 8, y: 8 });
    g.plot({ x: 9, y: 9 });
    g.plot({ x: 10, y: 10 });
  };

  initialiseEditor();
  g = initialiseGraphics();
  plotPixels();
})();
