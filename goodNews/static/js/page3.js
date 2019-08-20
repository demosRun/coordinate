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

// 计算内容区合适的高度
console.log(document.body.clientHeight)
var ratio = window.innerWidth / window.innerHeight
if (ratio > 1) {
  $('.box-content')[0].style.height = (document.body.clientHeight - (document.body.clientHeight * 0.08)) - 100 + 'px'
} else {
  $('.box-content')[0].style.height = (document.body.clientHeight - (document.body.clientHeight * 0.18)) - 130 + 'px'
}


var checkList = []
// 投票点击事件
$('.tp').change(function(changeItem) {
  checkList = []
  $('.tp').each(function(key, item) {
    // 判断是否选中
    if (item.checked) {
      checkList.push(item.getAttribute('tpid'))
    }
    // console.log(item.checked)
  })
  $('.check span')[0].innerText = checkList.length
  // alert(checkList)
})

// 投票按钮点击事件
function vote() {
  alert(checkList)
}

// 滚动到最前
function scrollToTop () {
  console.log('返回顶部')
  $('.box-content')[0].scrollTop = 0
}

// 跳转到指定页面
function turn (id) {
  window.location.replace($('#' + id)[0].value)
}