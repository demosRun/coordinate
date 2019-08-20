function changeBGSize () {
  var ratio = window.innerWidth / window.innerHeight
  if (ratio > 1.6) {
    document.body.style.backgroundSize = '100% auto'
  } else {
    document.body.style.backgroundSize = '100% auto'
  }
  if (ratio < 1) {
    document.body.classList.add('min')
    document.body.style.backgroundSize = '100% auto'
    $('.login-box')[0].style.height = $('.login-box').width() / 1.52 + 'px'
  } else {
    document.body.classList.remove('min')
  }
}
setTimeout(changeBGSize, 0)

window.onresize = changeBGSize

// 屏幕方向发生改变事件
// window.onorientationchange = changeBGSize

function inputEnd() {
  $(window).scrollTop(0)
}
