const toggle = document.querySelector("button");
const fullscreenEl = document.querySelector("#fullscreen_el");

toggle.addEventListener("click", () => {
  // document.documentElement.requestFullscreen()
  if (!document.fullscreenElement) {
    fullscreenEl.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});
