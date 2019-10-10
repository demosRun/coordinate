// 返回的方法
function back () {
  if (confirm('确定要返回上一页吗，可能会丢失未保存内容!')) {
    window.history.go(-1)
  }
}
function changeBGSize () {
  var ratio = window.innerWidth / window.innerHeight
  if (ratio < 1) {
    document.body.classList.add('min-box')
    document.body.innerHTML = '<div class="info-text">请使用电脑进行访问!</div>'
  }
  if (ratio > 1.6) {
    $('body').css('background-size', '100% auto')
  } else {
    $('body').css('background-size', 'auto 100%')
  }
}
changeBGSize ()
window.onresize = changeBGSize
