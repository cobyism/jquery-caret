/*
 * jquery-caret
 * https://github.com/cobyism/jquery-caret
 * Copyright (c) 2012 Coby Chapple (coby@github.com)
 * Released under the MIT license.
 */

(function($) {
  $.fn.caret = function(index){
    if (typeof index === "undefined"){
      return this[0].selectionStart;
    } else {
      this[0].focus();
      return this[0].setSelectionRange(index, index);
    }
  }
})(jQuery);
