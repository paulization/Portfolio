$(document).foundation()

$(function(){
  $('a').each(function() {
  	var currentPage = $(this).prop('href');
    if (currentPage == window.location.href && currentPage != 'index.html') {
      $(this).addClass('current');
    }
  });

  $("img.img-fit").imageScale();
});
