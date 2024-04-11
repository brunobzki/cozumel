const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const menuButton = document.querySelector("#menu");
const infobackground = document.querySelector("label")


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
      main.style.background = "#000";
      main.style.color = "#fff";
      menuButton.style.color = "#fff";
      modeButton.textContent = "🔆";
      
    } else {
      main.style.background = "#eee";
      main.style.color = "#000";
      menuButton.style.color = "#000";
      modeButton.textContent = "🕶️";
  
    }
  });