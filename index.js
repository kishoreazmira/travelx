/*alert("                                   wel-come to TravelX");*/

function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Learn More"
  }

  window.addEventListener("scroll", function() {
    var menuBar = document.querySelector(".menu-bar");
    if (window.pageYOffset > 0) {
      menuBar.classList.add("fixed-menu");
    } else {
      menuBar.classList.remove("fixed-menu");
    }
  });

