let progress = 0;
const loadingBar = document.querySelector(".loading-bar");
const loadingText = document.querySelector(".loading-text");

function updateProgress() {
  if (progress < 100) {
    progress += 1;
    loadingBar.style.width = progress + "%";
    loadingText.textContent = progress + "%";
    setTimeout(updateProgress, 50); // Adjust speed here
  } else {
    loadingText.textContent = "Done!";
  }
}

updateProgress();
