
function sliderSwitch() {
  let container = document.getElementsByClassName("services-container");
  if($(window).width() < 1024) {
    $(container).slick({
      centerMode: true,
      arrows: false,
      dots: true,
      variableWidth: true,
      slidesToShow: 1,
    });
  }
  else if ($(window).width() > 1024) {
    $(container).unslick();
  }
}



sliderSwitch();

$(window).resize(function() {
  sliderSwitch();
});
