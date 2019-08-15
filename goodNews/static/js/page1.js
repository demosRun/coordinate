function changeBGSize () {
  var ratio = window.innerWidth / window.innerHeight
  // console.log(ratio)
  if (ratio > 1.6) {
    $('body').css('background-size', '100% auto')
  } else {
    $('body').css('background-size', 'auto 100%')
  }
  if (ratio < 1) {
    document.body.classList.add('min')
    $('body').css('background-size', '100% auto')
    console.log($('.login-box').width())
    $('.login-box')[0].style.height = $('.login-box').width() / 1.52 + 'px'
  }
}
changeBGSize ()
window.onresize = changeBGSize

// 屏幕方向发生改变事件
window.onorientationchange = changeBGSize

function inputEnd() {
  $(window).scrollTop(0)
}
