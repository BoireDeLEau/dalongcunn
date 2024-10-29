// JavaScript Document

//标题栏下拉菜单
function change(myid, mode) {
  document.getElementById(myid).style.display = mode;
  if (mode == "block") {
    //显示下拉菜单
    //设置鼠标划过的背景颜色
    document.getElementById(myid).parentNode.style.borderBottom = "none";
  } else {
    //当不显示下拉列表时，鼠标划过的背景颜色
    document.getElementById(myid).parentNode.style.backgroundColor = "";
    document.getElementById(myid).parentNode.style.border = "";
  }
}
window.onload = function () {
  //点赞的
  let goodsList = document.querySelectorAll(".goods");
  for (let index = 0; index < goodsList.length; index++) {
    const element = goodsList[index];

    element.addEventListener("click", (e) => {
      if (element.src.includes("good.png")) {
        element.src = "../biglong/good_s.png";
      } else {
        element.src = "../biglong/good.png";
      }
    });
  }

  let commentsList = document.querySelectorAll(".comments");

  for (let index = 0; index < commentsList.length; index++) {
    const element = commentsList[index];

    element.addEventListener("click", (e) => {
      let pop = document.getElementById("pop");
      pop.style.display = "block";
    });
  }
};

function sendlPop() {
  alert("发表成功！");
  cancelPop();
}

// 取消评论的窗口
function cancelPop() {
  let pop = document.getElementById("pop");
  pop.style.display = "none";
}
