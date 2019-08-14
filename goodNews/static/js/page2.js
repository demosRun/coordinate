// 计算合适的屏幕大小
function changeBGSize () {
  var ratio = window.innerWidth / window.innerHeight
  if (ratio < 1) $('body')[0].classList.add('min')
  // console.log(ratio)
  if (ratio > 1.6) {
    $('body').css('background-size', '100% auto')
  } else {
    $('body').css('background-size', 'auto 100%')
  }
}
changeBGSize ()
window.onresize = changeBGSize

// 删除提示
function deleteItem (id, name) {
  console.log(this)
  var mymessage = confirm('确定要删除 "' + name + '" 吗！')
  if (mymessage) {
    // 刷新页面
    location.reload()
  } else {

  }
}