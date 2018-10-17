var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){function makemeSticky2(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking2 bounceInUp",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky2("bungkus");
};

function openSosprofil() {
  var e = document.getElementById("sos-profil");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("search-box");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  var e = document.getElementById("search-icon");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("ellipsis-icon");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
};

function openMobilemenu(){var e=document.getElementById("mobile-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

function openToolmenu() {
  document.getElementById("tool-menu").style.display = "block";
};
var boxArray = ["tool-menu"];
window.addEventListener("mouseup", function(e) {
  for (var r = 0; r < boxArray.length; r++) {
    var o = document.getElementById(boxArray[r]);
    e.target != o && e.target.parentNode != o && (o.style.display = "none")
  }
});

function hidesubscribe(){document.getElementById("subscribeOnscroll").style.display="none"}function hidesubscribebox(){document.getElementById("subscribeOnscroll").style.display="none",createCookie("hideDialog","hide",7000)}function createCookie(e,o,n){if(n){var t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3);var i="; expires="+t.toGMTString()}else var i="";document.cookie=e+"="+o+i+"; path=/"}function readCookie(e){for(var o=e+"=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var i=n[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(o))return i.substring(o.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>800&&(appended||(document.body.appendChild(bookmark),appended=!0),readCookie("hideDialog")&&(document.getElementById("subscribeOnscroll").style.display="none"))};
