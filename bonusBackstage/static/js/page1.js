function changeBGSize () {
  
  var ratio = window.innerWidth / window.innerHeight
  if (ratio < 1) {
    document.body.classList.add('min')
    document.body.style.backgroundSize = '100% auto'
    $('.login-box')[0].style.height = $('.login-box').width() / 1.52 + 'px'
  } else {
    if (ratio < 1.6) document.body.style.backgroundSize = 'auto 100%'
    else document.body.style.backgroundSize = '100% auto'
    document.body.classList.remove('min')
    $('.login-box')[0].style.height = ''
  }
}
changeBGSize()

window.onresize = function () {
  setTimeout(() => {
    changeBGSize()
  }, 100)
}

// 屏幕方向发生改变事件
window.onorientationchange = function () {
  setTimeout(() => {
    changeBGSize()
  }, 100)
}

function inputEnd() {
  $(window).scrollTop(0)
}
