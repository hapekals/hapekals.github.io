function getScroll() {
  var elmnt = $(".regular-wrapper")
  var top = elmnt.offset().top;
  var bottom = $(window).height() - top;
  console.log(top);
  console.log(bottom);

  var fadeobj = $(".titelcontainer")
  var wp = $( window ).height() * 0.01;

  console.log(wp);
  if (bottom > wp * 50){
    fadeobj.fadeOut(600)
  }else {
    fadeobj.fadeIn(600);
  }
}

