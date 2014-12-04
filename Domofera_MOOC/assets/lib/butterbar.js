function ButterBar(cont, popup, message, close) { 
  this.cont = cont;
  this.popup = popup;
  this.message = message;
  this.close = close;
}
ButterBar.prototype.showMessage = function(text) {
  this.message.textContent = text;  // FF, Chrome
  this.message.innerText = text;    // IE
  if (! $(this.cont).hasClass("shown")) {
    $(this.cont).addClass("shown");
  }
  if (this.close != null) {
    this.close.onclick = cbHideMsg;
  }
  window.onscroll = ButterBar.keepInView;
};
ButterBar.prototype.hide = function() {
  if ($(this.cont).hasClass("shown")) {
    $(this.cont).removeClass("shown");
  }
};
ButterBar.prototype.setCloseButtonVisible = function(visible) {
  if (visible) {
    $(this.close).css('display', null);
  } else {
    $(this.close).css('display', 'none');
  }
}
ButterBar.getButterBar = function() {
  return new ButterBar(document.getElementById("gcb-butterbar-cont"),
      document.getElementById("gcb-butterbar-top"),
      document.getElementById("gcb-butterbar-message"),
      document.getElementById("gcb-butterbar-close"));
};
function cbShowMsg(text) {
  var butterBar = ButterBar.getButterBar();
  butterBar.setCloseButtonVisible(true);
  butterBar.showMessage(text);
}
function cbShowAlert(text) {
  // An alert should not be closed; hide the close button
  var butterBar = ButterBar.getButterBar();
  butterBar.setCloseButtonVisible(false);
  butterBar.showMessage(text);
}
function cbHideMsg() {
  ButterBar.getButterBar().hide();
}
ButterBar.keepInView = function() {
  var popup = ButterBar.getButterBar().popup;
  var container = popup.parentElement;

  container.style.top = null;
  $(container).removeClass('fixed');

  var offset = $(popup).offset().top;
  if (offset - $(document).scrollTop() <= 10) {
    $(container).addClass('fixed');
    //container.style.top = (10 - popup.offsetTop) + "px";
  }
};
