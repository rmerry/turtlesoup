export function gfxlib (canvasElement) {

  if (canvasElement === undefined) {
    return Error('Missing argument: canvas element');
  }

  let canvas = canvasElement;
  let canvasHeight = canvasElement.height;
  let canvasWidth = canvasElement.width;
  let ctx = canvasElement.getContext('2d');
  let img = ctx.getImageData(0, 0, 100, 100);

  /**
   * 
   */
  let plot = function (data) {

    if (data === undefined) {
      return;
    }

    let x = data.x;
    let y = data.y;

    if (x === undefined || y === undefined) {
      return;
    }

    let px = (y * canvasWidth + x) * 4;

    img.data[px] = 0xff;
    img.data[++px] = 0;
    img.data[++px] = 0;
    img.data[++px] = 0xff;

    redraw();
  };

  /**
   *
   */
  let redraw = function () {

    ctx.putImageData(img , 0, 0);
  };

  return {
    plot: plot
  };
};
