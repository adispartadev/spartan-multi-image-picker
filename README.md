# spartan-multi-image-picker

[![npm](https://img.shields.io/npm/dt/spartan-multi-image-picker.svg)](https://github.com/adispartadev/spartan-multi-image-picker)

This plugin enable you to upload multiple files on a html form without hold `Ctrl` on your keyboard. You can use it for non-ajax or ajax uploading file. 


***Now support drag and drop to adding file.***




![img](https://adispartadev.github.io/spartan-multi-image-picker/preview1.gif)


### Installation

Download this package or install via bower

`bower install spartan-multi-image-picker`


Include [JQuery](https://jquery.com/) first, and this plugin after that like so.
```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="dist/js/spartan-multi-image-picker-min.js"></script>
```



Create an element where do you want to activate this input file.

```html
<div class="row">
	<div id="coba"></div>
</div>
```

Activate this plugin.

```js
$("#coba1").spartanMultiImagePicker({
	fieldName:   'fileUpload[]'
});
```
The `fieldName` is your field name that will appended as input type file to you html.

### All Properties

This is what you can custom when you call this plugin.

| Property | Type | Example |
| ------ | ------ | ------ |
| `fieldName` | String | `fileUpload[]` or `fileUpload` for single image |
| `maxCount` | Number | `1`, `2` remove for unlimited count |
| `rowHeight` | String | `200px` |
| `groupClassName` | String | `col-md-4 col-sm-4 col-xs-6` |
| `allowedExt` | String | `png|jpg|jpeg|gif` or empty string for all type |
| `placeholderImage` | Object with `image` and `width` properties | `{ image: 'placeholder.png', width: '100%'}` |
| `maxFileSize` | Number (in kb) | `40000` |
| `dropFileLabel` | String | `Drop file here` |

### Callback

| Callback | Description |
| ------ | ------ |
| `onAddRow` | Called on a new field appear |
| `onRenderedPreview` | Called on image rendered as a preview  |
| `onRemoveRow` | Called on user click the remove button for each field |
| `onExtensionErr` | Called on extension didn't match as `allowedExtension` |
| `onSizeErr` | Called on image size is more than `maxFileSize` prop |

### Full customize example:
```js
$("#coba").spartanMultiImagePicker({
	fieldName:        'fileUpload[]',
	maxCount:         5,
	rowHeight:        '200px',
	groupClassName:   'col-md-4 col-sm-4 col-xs-6',
	allowedExt:       'png|jpg',
	dropFileLabel:    "Drop Here",
	placeholderImage: {
	    image: 'placeholder.png',
	    width: '100%'
	},
	onAddRow:       function(){
		console.log('add new row');
	},
	onRenderedPreview : function(){
		console.log('preview rendered');
	},
	onRemoveRow : function(){
		console.log('remove row');
	},
	onExtensionErr : function(){
		console.log('extension error');
		alert('Please only input png or jpg type file');
	},
	onSizeErr : function(){
		console.log('file size too big');
		alert('File size too big');
	}
});
```
