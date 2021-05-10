function collapseMenu() {
    let menu = document.getElementById('menu-bar');
    let menuInfo = document.getElementById('protection-menu');

    menu.classList.add('collapsed');
    menu.setAttribute('aria-expanded', 'false');
    menuInfo.classList.remove('show');
    menuInfo.classList.remove('collapsing');
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        })


/*cookies**/
// --- Config --- //
var purecookieTitle = "This site uses Cookies"; // Title
var purecookieDesc = "By using this website, you automatically accept that we use cookies."; // Description
var purecookieLink = '<a href="#" target="_blank">What for?</a>'; // Cookiepolicy link
var purecookieButton = "I Understand"; // Button text
// ---        --- //


function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + ' ' + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + '</a></div></div>';
	pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie('purecookieDismiss','1',7);
  pureFadeOut("cookieConsentContainer");
}

window.onload = function() { cookieConsent(); };





const firstContentSection = document.getElementById("first-content-section");

const navLi = document.querySelectorAll("nav .container-fluid .collapse .navbar-nav a");
window.addEventListener("scroll", () => {
    const landingPageYoffset = window.pageYOffset;

    if (landingPageYoffset >= 160) {
      let nav = document.getElementById('navbar');
      let navbar = document.getElementById('navbar-nav');
      nav.classList.add('scroll-nav');
      navbar.classList.add('scroll-nav');
    }

    else {
      let nav = document.getElementById('navbar');
      let navbar = document.getElementById('navbar-nav');
      nav.classList.remove('scroll-nav');
      navbar.classList.remove('scroll-nav');
    }

    if (landingPageYoffset>= 570) {
      let navServices = document.getElementById('nav-services');
      let navHome = document.getElementById('nav-home');

      navServices.classList.add('active-page');
      navServices.classList.add('active-page1');
      navHome.classList.remove('active-page');

    }

    else {
      let navServices = document.getElementById('nav-services');
      let navHome = document.getElementById('nav-home');

      navServices.classList.remove('active-page');
      navServices.classList.remove('active-page1');
      navHome.classList.add('active-page');
    }
});

  // navLi.forEach((a) => {
  //   a.classList.remove("active-page");
  //   if (a.classList.contains(current)) {
  //     a.classList.add("active-page");
  //   }
  // });


