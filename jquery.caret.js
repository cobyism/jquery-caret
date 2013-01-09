/*
 * jquery-caret
 * https://github.com/cobyism/jquery-caret
 * Copyright (c) 2012 Coby Chapple (coby@github.com)
 * Released under the MIT license.
 */

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
