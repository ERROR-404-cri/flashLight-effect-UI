const flashLightRef = document.getElementById("flashLight");

flashLightRef.addEventListener("pointermove", (event) => {
  flashLightRef.style.setProperty("--pointerXPosition", event.pageX + "px");
  flashLightRef.style.setProperty("--pointerYPosition", event.pageY + "px");
});
