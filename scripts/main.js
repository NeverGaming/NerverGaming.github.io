let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/MBV.jpg") {
    myImage.setAttribute("src", "images/MBV-2.jpg");
  } else {
    myImage.setAttribute("src", "images/MBV.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName) {
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "享受梦幻盯鞋，" + myName;
    }
  }

  myButton.onclick = function () {
    setUserName();
  };
  
