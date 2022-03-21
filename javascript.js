function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function sleep1(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function load() {
    sleep(100).then(() => {
        element = document.getElementById("loaded")
        element.className = "container reveal active"
    })
}
function load1() {
  sleep(4000).then(() => {
    element = document.getElementById("loaded1")
    element.classList = "arrows active"
})
}
function load3() {
  var el = document.querySelector("#toggle")
  el.checked = false;
  load2()
}
function load2() {
  var el = document.querySelector("#toggle")
  if (el.checked == true){
    var elem = document.querySelectorAll("section")
    elem.forEach(element => {
      element.style.display = "none"
    });
  }
  else{
    var elem = document.querySelectorAll("section")
    elem.forEach((element, index) => {
        element.style.display = "flex"
    });
  }
}
function reply_click(clicked_id){
  var toRevokeSelector = document.querySelector(".underline")
  toRevokeSelector.className = ""
  var toRevoke = document.querySelector(".choiceText.mid.active")
  toRevoke.classList.remove("active")
  toRevoke.classList.remove("mid")
  var toAddText = document.getElementById("t"+clicked_id)
  toAddText.classList.add("mid")
  sleep(50).then(() => {
    toAddText.classList.add("active") })
  var toAddSelector = document.getElementById(clicked_id)
  toAddSelector.className = "underline"
}
window.addEventListener("click", load2)
window.addEventListener("scroll", reveal);
  