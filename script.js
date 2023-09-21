var rn = ``
function bubly() {
  var clutter = ``;
  for (var i = 0; i <= 118; i++) {
    var valu = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${valu}</div>`;
  }
  document.querySelector("#bottom").innerHTML = clutter
}
function timer() {
  var time = 60;
  var timers = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector(".box #time").textContent = time;
    } else {
      clearInterval(timers);
        gsap.to("#gameover", {
          scale: 1
        })
      document.querySelector("#gameover h2>span").textContent = score
      document.querySelector("#bottom").innerHTML = ""


    }
  }, 1000)
}
function hit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector(".box #hit").textContent = rn;
}
var score = 0;
function add() {
  score += 10;
  document.querySelector(".box #score").textContent = score;
}
function scoreadd() {
  document.querySelector("#bottom").addEventListener("click", function (dets) {
    var spot = Number(dets.target.textContent);
    if (spot === rn) {
      add();
      bubly();
      hit();
    }
  })
}
scoreadd();
hit();
setTimeout(function () {
  bubly();
  timer();
}, 500)


document.querySelector("#gameover button").addEventListener("click", function () {
  location.reload();
})