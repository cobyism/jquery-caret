(function($) {
  $.fn.caret = function(index){
    if (index){
      this[0].focus();
      return this[0].setSelectionRange(index, index);
    } else {
      return this[0].selectionStart;
    }
  }
})(jQuery);
