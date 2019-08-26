// 计算合适的屏幕大小
function changeBGSize () {
  var ratio = window.innerWidth / window.innerHeight
  // console.log(ratio)
  // alert(ratio)
  if (ratio < 1) {
    document.body.classList.add('min')
  } else {
    document.body.classList.remove('min')
  }
  if (ratio > 1) {
    $('.box-content')[0].style.height = (document.body.clientHeight - (document.body.clientHeight * 0.08)) - 100 + 'px'
  } else {
    $('.box-content')[0].style.height = (document.body.clientHeight * 0.72 - 80 + 'px')
  }
  if (ratio > 1.71) {
    $('.content .left')[0].style.backgroundSize = '100% auto'
  }
  document.body.style.display = 'block'
}
changeBGSize ()
window.onresize = changeBGSize



var checkList = []


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

// 获取到存储的内容
setTimeout(() => {
  var data = localStorage.getItem("check")
  if (data) {
    data = JSON.parse(data)
  } else {
    data = {
      check: []
    }
  }
  // 判断是否为同一内容
  if (document.getElementsByClassName('top')[0].innerText == data.key) {
    var ind = 0
    $('.tp').each(function(key, item) {
      if (data.check[key]) {
        ind++
        item.click()
      }
    })
    $('.check span')[0].innerText = ind
  }
  // 投票点击事件
  $('.tp').change(function(changeItem) {
    var storage = {
      key: document.getElementsByClassName('top')[0].innerText,
      check: []
    }
    checkList = []
    $('.tp').each(function(key, item) {
      // 判断是否选中
      storage.check[key] = false
      if (item.checked) {
        storage.check[key] = true
        checkList.push(item.getAttribute('tpid'))
      }
      // console.log(item.checked)
    })
    localStorage.setItem("check", JSON.stringify(storage))
    $('.check span')[0].innerText = checkList.length
  })
}, 0)