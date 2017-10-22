var backgrounds = document.querySelectorAll(".markdown-body");
var h1 = document.getElementsByTagName("h1");
var h2 = document.getElementsByTagName("h2");
var h3 = document.getElementsByTagName("h3");
var code = document.getElementsByTagName("code");

document.getElementById("js-repo-pjax-container").style.background = "#282c34";

for (var i = 0; i < backgrounds.length; i++) {
    backgrounds[i].style.background = "#282c34";
    backgrounds[i].style.color = "#abb2bf";
}

for (var i = 0; i < h1.length; i++) {
    h1[i].style.color = "#c678dd";
}

for (var i = 0; i < h2.length; i++) {
    h2[i].style.color = "#5cb079";
}

for (var i = 0; i < h3.length; i++) {
    h3[i].style.color = "#d18c4e";
}

for (var i = 0; i < code.length; i++) {
    code[i].style.background = "#5b5f67";
    code[i].style.color = "#dee5ff";
}


// ovo probaj

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });
