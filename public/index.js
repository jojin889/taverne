// var img1 = new Image();
// img1.src = "/assets/viande.jpg";
window.onload = function () { 

  const menuBtn = document.querySelector(".menu-btn");
  const burgerOverlay = document.querySelector('.burger__overlay');

  let menuOpen = false;


  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;

      burgerOverlay.classList.add('visibility');
      burgerOverlay.classList.add('showBurger');

    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;

      burgerOverlay.classList.remove('visibility');
      burgerOverlay.classList.remove('showBurger');

    }
  });

  const nav = document.querySelector(".navbar");
  const logo = document.querySelector(".logo_shield");


  
    // navbar already deployed on other pages


  
    var url = window.location.pathname;
    console.log('url', url)

    if (url !== "/") {
      nav.classList.add("active");
      nav.classList.remove("navbar");
      logo.classList.remove("logo_shield_inactive");
      logo.classList.remove("inactive");
      logo.classList.add("logo_shield");
    }

    //same for 404 page



// navbar deployement
  window.addEventListener("scroll", () => {
    var h = window.scrollY;

    if (h > 60) {
      nav.classList.add("active");
      nav.classList.remove("navbar");
      logo.classList.remove("logo_shield_inactive");
      logo.classList.remove("inactive");
      logo.classList.add("logo_shield");
    } else {
      nav.classList.add("navbar");
      nav.classList.remove("active");
      logo.classList.remove("logo_shield");
      logo.classList.add("logo_shield_inactive");
    }
  });
  
};
