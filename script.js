var iframe = document.getElementById("video")

function resize() {
  iframe.width = window.innerWidth * 2 / 3;
  iframe.height = iframe.width * 9 / 16;
}
