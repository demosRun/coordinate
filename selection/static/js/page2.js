function addJudges () {
  document.getElementsByClassName('judges-list')[0].innerHTML = document.getElementsByClassName('judges-list')[0].innerHTML + '<div class="judges">姓名: <input type="text" class="name">部门: <input type="text" class="department"></div>'
}