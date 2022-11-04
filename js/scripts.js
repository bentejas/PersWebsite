function responsiveButton() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function darkMode(){
    var x = document.getElementById("darkToggle");
    if(x.checked){
        document.body.style.backgroundColor = "#111111";
        document.body.style.color = "white";
        document.getElementById("icon").style.color = "white";
        document.getElementById("name").style.color = "white";
        var els = document.getElementsByClassName('inactive');
        for (var i = 0; i < els.length; i++) {
            els[i].style.color = 'white';
        }
        var sBox = document.getElementsByClassName('sectionBox');
        for (var i = 0; i < sBox.length; i++) {
            sBox[i].style.borderColor = 'white';
        }
    }else{
        document.body.style.backgroundColor = "white";
        document.getElementById("icon").style.color = "black"
        document.body.style.color = "black";
        document.getElementById("name").style.color = "black";
        var els = document.getElementsByClassName('inactive');
        for (var i = 0; i < els.length; i++) {
            els[i].style.color = 'black';
        }
        var sBox = document.getElementsByClassName('sectionBox');
        for (var i = 0; i < sBox.length; i++) {
            sBox[i].style.borderColor = 'black';
        }
    }
    return false;
}

var categoryBtns = document.getElementsByClassName("sectionBox");

for(let i = 0; i < categoryBtns.length; i++){
    categoryBtns[i].addEventListener("click", function(){
        if(categoryBtns[i].classList.contains("expanded")){
            categoryBtns[i].classList.remove("expanded");
        }else{
            categoryBtns[i].classList.add("expanded");   
        }
    })
}