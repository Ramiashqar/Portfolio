const navCaption = document.querySelectorAll(
  ".navigation__icons--link--figure-caption"
);
const bodyEl = document.getElementsByTagName("BODY")[0];
if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  navCaption.forEach(el => {
    el.style.fontFamily = "SourceCodePro-medium, Courier, monospace";
  });
}
if (
  navigator.userAgent.indexOf("MSIE ") > -1 ||
  !!navigator.userAgent.match(/Trident.*rv\:11\./)
) {
  bodyEl.innerHTML =
    '<div class="IEisUsed"><h2>You Seem to be Using an Unsupported Browser</h2><p>To get the most out of using all the new features Please use a supported browser</p><a href="https://www.google.com/chrome/" class="browser"><img src="assets/images/chrome-logo.png" alt="Chrome" class="browser-image"></a><a href="https://www.mozilla.org/en-US/firefox/new/" class="browser"><img src="assets/images/firefox-logo.png" alt="FireFox" class="browser-image"></a><a href="https://www.apple.com/lae/safari/" class="browser"><img src="assets/images/safari-logo.png" alt="safari" class="browser-image"></a></div>';
}
