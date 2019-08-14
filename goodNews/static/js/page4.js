// 计算合适的屏幕大小
function changeBGSize () {
  var ratio = window.innerWidth / window.innerHeight
  // console.log(ratio)
  if (ratio < 1) {
    document.body.classList.add('min')
  }
}
changeBGSize ()
window.onresize = changeBGSize

// 水波纹按钮
function createRipple() {
  //Create Ripple
  const ripple = document.createElement("div");
  ripple.className = "ripple-effect";


  this.appendChild(ripple);

  ripple.style.top = (event.layerY - (ripple.offsetWidth / 2)) + "px";
  ripple.style.left = (event.layerX - (ripple.offsetHeight / 2)) + "px";

  ripple.addEventListener("animationend", destroyRipple, false);
  ripple.addEventListener("webkitAnimationEnd", destroyRipple, false);
  ripple.addEventListener("oAnimationEnd", destroyRipple, false);
  ripple.addEventListener("MSAnimationEnd", destroyRipple, false);
}

function destroyRipple() {
  this.parentElement.removeChild(this)
}
$('.ripple').on('mousedown', createRipple)
$('.ripple').on('touchstart', createRipple)