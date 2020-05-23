var $ = document.getElementById;

function topFunction() {
  // document.body.scrollTop = 0;
  document.getElementById("bottom-Anchor");
  document.documentElement.scrollTop = 0;
}

function bottomFunction() {
  var scrollBottom = $(window).scrollTop() + $(window).height;

  document.getElementById("bottom-Anchor");
  document.documentElement.scrollBottom = 0;
}
