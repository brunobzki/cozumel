document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");

      banner.style.display = "block";
    closeBannerBtn.addEventListener("click", function() {
      banner.style.display = "none";
    });
  });