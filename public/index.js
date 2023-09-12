window.onload = function () {
  var url = window.location.pathname;
  console.log("url->", url);

  function myFunction() {
    // document.getElementById("loloading").style.display = "block";
    document.getElementById("loading").style.display = "none";
    const loader = document.getElementById("page-loader");
    loader.classList.add(".hidden");
  }
  myFunction();

  if (url == "/admin" || url == "/admin/desk") {
    return;
  }

  const footer__container = document.querySelector(".footer__left");

  const menuBtn = document.querySelector(".menu-btn");
  const burgerOverlay = document.querySelector(".burger__overlay");

  let menuOpen = false;

  footer__container.addEventListener("click", () => {
    if (menuOpen) {
      menuBtn.classList.remove("open");
      menuOpen = false;

      burgerOverlay.classList.remove("visibility");
      burgerOverlay.classList.remove("showBurger");
    }
  });

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;

      burgerOverlay.classList.add("visibility");
      burgerOverlay.classList.add("showBurger");
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;

      burgerOverlay.classList.remove("visibility");
      burgerOverlay.classList.remove("showBurger");
    }
  });

  if (url == "/_event") {
    const event__container = document.querySelector(".event__container");

    event__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });

    footer__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });
  }

  if (url == "/_menu") {
    const menu__container = document.querySelector(".menu__container");

    menu__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });
  }

  if (url == "/") {
    const hero__container = document.querySelector(".hero");
    const news__container = document.querySelector(".news");
    const horaire__container = document.querySelector(".horaire");
    const galery__container = document.querySelector(".gallery");
    const mail__container = document.querySelector(".mail");

    hero__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });
    news__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });
    horaire__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });
    galery__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });

    mail__container.addEventListener("click", () => {
      if (menuOpen) {
        menuBtn.classList.remove("open");
        menuOpen = false;

        burgerOverlay.classList.remove("visibility");
        burgerOverlay.classList.remove("showBurger");
      }
    });
  }

  const nav = document.querySelector(".navbar");
  const logo = document.querySelector(".logo_shield");

  // navbar already deployed on other pages

  if (url !== "/") {
    nav.classList.add("active");
    nav.classList.remove("navbar");
    logo.classList.remove("logo_shield_inactive");
    logo.classList.remove("inactive");
    logo.classList.add("logo_shield");
  }

  //same for 404 page

  // lol à faire

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

  // framer-motion
};