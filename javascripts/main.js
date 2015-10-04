console.log('This would be the main JS file.');


// $.fn.scrollView = function () {
//   return this.each(function () {
//     $('html, body').animate({
//       scrollTop: $(this).offset().top
//     }, 1000);
//   });
// }


$(function() {
  $("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
    }, 2000);
  });
});

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}
