// 返回的方法
function back () {
  if (confirm('确定要返回上一页吗，可能会丢失未保存内容!')) {
    window.history.go(-1)
  }
}
function changeBGSize () {
  var ratio = window.innerWidth / window.innerHeight
  // console.log(ratio)
  if (ratio > 1.6) {
    $('body').css('background-size', '100% auto')
  } else {
    $('body').css('background-size', 'auto 100%')
  }
}
changeBGSize ()
window.onresize = changeBGSize
// 判断是否已经上传过图片
var imageList = $(".new-image img")
for (let index = 0; index < imageList.length; index++) {
  const element = imageList[index]
  // 如果有图片则显示图片
  if (element.src) {
    element.style.display = 'block'
  }
}
// 上传图片预览
$(".file-upload").change(function () {
  var parent = this.parentElement
  var preview = parent.getElementsByTagName('img')[0]
  var fileDom = parent.querySelector('input[type=file]')
  var file = fileDom.files[0]
  // 限制上传图片的大小
  if(file.size > 1024 * 1024 * 2) {
    alert('图片大小不能超过 2MB!');
    return false;
  }
  // console.log(preview)
  // 创建url
  var imgUrl = window.URL.createObjectURL(file)
  preview.setAttribute("src", imgUrl)
  // 更改img url 以后释放 url
  preview.onload = function() {
    // console.log('图片加载成功')
    URL.revokeObjectURL(imgUrl)
    preview.style.display = 'block'
  }
})
// 判断必须输入的内容是否输入正确
function submitData() {
  var mustList = ['zpmc', 'tjjx', 'bm', 'fbsj', 'ycxwlx', 'zz', 'tbr', 'tbdh', 'fwl', 'zzl', 'ljdz', 'zpjj', 'tjly']
  // 作品名称
  // 推荐奖项
  // 部门
  // 发布时间
  // 原创新闻类型
  // 作者
  // 填报人
  // 填报电话
  // 访问量
  // 转载量
  // 作者
  // 作品简介
  // 推荐理由
  var err = false
  mustList.forEach(element => {
    var item = $('#' + element)
    var value = item.val()
    if (value) {
      item.css('border-color', '#dfdfdf')
    } else {
      err = true
      item.css('border-color', 'red')
    }
  })
  if (err) {
    alert('还有必填内容未填写!')
  }
  // 判断图片是否上传了两张
  var file1 = $('#fileinp')[0].files[0]
  var file2 = $('#fileinp2')[0].files[0]
  // 如果没有上传两张图判断是否本来就有图片
  var previewImg1IsSet = $('#previewImg1')[0].src != ""
  var previewImg2IsSet = $('#previewImg2')[0].src != ""
  console.log(file1, file2, previewImg1IsSet, previewImg2IsSet)
  // 判断是否总编辑奖
  var editor = $('#radio1')[0].checked
  console.log(editor)
}