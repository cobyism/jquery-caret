Caret
=====

A small jQuery plugin to set and query caret (keyboard input cursor) position within `<textarea>`s and text `<input>`s.

## Usage

Include scripts for jQuery and this plugin in your HTML (refer to [the demo](http://cobyism.com/jquery-caret) for an example):

```html
<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="jquery.caret.js"></script>
```

Then use the `caret()` method to set or query the caret position for your `<textarea>`.

```js
$('.your-textarea').caret(5)
//=> Caret is placed after the 5 character in the text field
$('.your-textarea').caret()
//=> 5
```

Note: that the caret position index starts at `0`, not `1`.

## Browser support

This should function correctly in most modern browsers:
- Recent versions of Chrome, Safari, Firefox, Opera.
- Internet Explorer 9 (earlier versions untested).

## Contributions

Contributions welcome! :grinning:

## License

See [LICENSE](https://github.com/cobyism/jquery-caret/blob/gh-pages/LICENSE).
