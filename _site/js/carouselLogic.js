"use strict";
const smallScreen = window.matchMedia("(max-width: 500px)");
if (smallScreen.matches){
  console.log('small screen')
  $('.img-container').hide();
} else {
  console.log('large screen')
  $('.img-container').show();
}






if (matchMedia) {
  const mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
function WidthChange(mq) {
  if (mq.matches) {
    console.log('window width is at least 500px')
    $('.img-container').show();

  } else {
    console.log('window width is less than 500px')
    $('.img-container').hide();
    $('.table-container').css('height','100vh');
  }

}
