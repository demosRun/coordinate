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

function checkAll() {
  var checkItemList = document.getElementsByClassName('check-item')
  if (document.getElementById('checkAllBox').checked) {
    for (var ind = 0; ind < checkItemList.length; ind++) {
      checkItemList[ind].checked = true
    }
  } else {
    for (var ind = 0; ind < checkItemList.length; ind++) {
      checkItemList[ind].checked = false
    }
  }
  
}


function changeTianBao () {
  var tianbao = document.getElementsByClassName('tianbao-switch')[0]
  var text = tianbao.getElementsByClassName('text')[0]
  if (document.getElementById('tianbao').checked) {
    
    text.innerText = '填票打开'
    text.style.left = '-10px'
  } else {
    text.style.left = '10px'
    text.innerText = '填票关闭'
  }
}

function changeTouPiao () {
  var toupiao = document.getElementsByClassName('toupiao-switch')[0]
  var text = toupiao.getElementsByClassName('text')[0]
  if (document.getElementById('toupiao').checked) {
    
    text.innerText = '投票打开'
    text.style.left = '-10px'
  } else {
    text.style.left = '10px'
    text.innerText = '投票关闭'
  }
}
