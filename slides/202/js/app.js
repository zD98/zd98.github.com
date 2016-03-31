/**
 * Created by zd on 2016/3/4.
 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.width = 300;
ctx.height = 150;
//console.log(ctx.createRadialGradient(150,75,25,150,75,50));
//grd.addColorStop(0,'#fff');
//grd.addColorStop(0.67,'#000');
//grd.addColorStop(1,'#fff');
//ctx.fillStyle = grd;
//ctx.arc(150,75,100,0,2*Math.PI);
//ctx.fill();
var grd, r = 0, a = 1;
function renderCircle(x, y, r1, a) {
  ctx.globalAlpha = a;
  grd = ctx.createRadialGradient(x, y, r1, x, y, r1 * 2);

  grd.addColorStop(0, '#fff');
  grd.addColorStop(0.67, '#000');
  grd.addColorStop(1, '#fff');
  ctx.fillStyle = grd;
  ctx.arc(x, y, r1 * 2, 0, 2 * Math.PI);
  ctx.fill();
  grd = null;
}

function render() {
  if (a <= 0) {
    r = 0;
    a = 1;
  } else {
    r += 1;
    a -= 0.02;
  }
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 300, 150);
  renderCircle(150, 75, r, a);
  //setTimeout(render,50);
}
render();