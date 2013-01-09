$(document).ready(function(){
  // The controls on the demo page
  var textarea = $('.js-textarea');
  var newPositionInput = $('.js-new-position');

  // Generate a random index position for the demo
  function genRandomIndex(){
    var rand = Math.floor(Math.random() * (textarea.val().length + 1));
    newPositionInput.val(rand);
  }
  genRandomIndex();

  // Monitor the caret position
  setInterval(function() {
    $('.js-current-position').html(textarea.caret());
  }, 100);

  // Set the caret position via the text field
  $('form').submit(function(event){
    textarea.caret(newPositionInput.val());
    genRandomIndex();
    event.preventDefault();
  });
});
