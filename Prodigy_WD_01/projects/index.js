document.addEventListener("DOMContentLoaded", function () {
  // Function to define and play the title animation
  function playTitleAnimation() {
    var titleElement = document.querySelector(".text-content h1");

    // Set up the fade-in animation
    var titleAnimation = anime.timeline({
      targets: titleElement,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1500,
    });

    // Trigger the animation
    titleAnimation.play();
  }

  // Call the function initially
  playTitleAnimation();

  // Call the function every 5000 milliseconds (adjust as needed)
  setInterval(playTitleAnimation, 5000);
});
