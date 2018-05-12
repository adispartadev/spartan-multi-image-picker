# spartan-multi-image-picker
> A Jquery multi image picker with preview (and madness).



[![npm](https://img.shields.io/npm/dt/spartan-multi-image-picker.svg)](https://github.com/adispartadev/spartan-multi-image-picker)
[![Version](https://img.shields.io/npm/v/spartan-multi-image-picker.svg)](https://www.npmjs.com/package/spartan-multi-image-picker)

***Next develop will allow user drag more than one picture***


This plugin enable you to upload multiple files on a html form without hold `Ctrl` on your keyboard. You can use it for non-ajax or ajax uploading file. 


- [Website](https://adispartadev.github.io/spartan-multi-image-picker/)


![img](https://adispartadev.github.io/spartan-multi-image-picker/preview1.gif)



### Current New Feature
1. Drag and drop image
2. Direct image uploading



### Installation

Download this package or install via bower

`bower install spartan-multi-image-picker`

Include stylesheet, I recommended to use bootstrap and font-awesome.
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
```

Include requirment script and this plugin after that like so.
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
| `directUpload` | Object | See in my example file |

### Callback

| Callback | Description | Return Param |
| ------ | ------ | ----- |
| `onAddRow` | Called on a new field appear | item count |
| `onRenderedPreview` | Called on image rendered as a preview  | item count |
| `onRemoveRow` | Called on user click the remove button for each field | item count |
| `onExtensionErr` | Called on extension didn't match as `allowedExtension` | item count, file |
| `onSizeErr` | Called on image size is more than `maxFileSize` prop | item count, file |

### Customize example:
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
	onAddRow:       function(index){
	    console.log(index);
		console.log('add new row');
	},
	onRenderedPreview : function(index){
	    console.log(index);
		console.log('preview rendered');
	},
	onRemoveRow : function(index){
	    console.log(index);
		console.log('remove row');
	},
	onExtensionErr : function(index, file){
	    console.log(index, file);
		alert('Please only input png or jpg type file');
	},
	onSizeErr : function(index, file){
		console.log(index, file);
		alert('File size too big');
	}
});
```

### Direct Upload Image
Is this option is true, your file is directly send to serve when file selected. This is a few example code

```js
$("#coba").spartanMultiImagePicker({
	fieldName:  'fileUpload[]',
	directUpload : {
		status: true, // activate direct upload
		loaderIcon: '<i class="fas fa-sync fa-spin"></i>',
		url:       'c.php',
		additionalParam : {
			name : 'My Name'
		},
		success : function(data, textStatus, jqXHR){
		},
		error : function(jqXHR, textStatus, errorThrown){
		}
	}
});
```
