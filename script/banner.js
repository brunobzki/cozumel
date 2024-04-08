document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");
  
    var today = new Date();
    var dayOfWeek = today.getDay();
  
   
      banner.style.display = "block";
    
  
    closeBannerBtn.addEventListener("click", function() {
      banner.style.display = "none";
    });
  });