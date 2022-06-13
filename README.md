
# spartan-multi-image-picker

> A Jquery multi image picker with preview (and madness).

  
  
  

[![npm](https://img.shields.io/npm/dt/spartan-multi-image-picker.svg)](https://github.com/adispartadev/spartan-multi-image-picker)

[![Version](https://img.shields.io/npm/v/spartan-multi-image-picker.svg)](https://www.npmjs.com/package/spartan-multi-image-picker)

  

***Hello, sorry for not doing maintenance for a long time.***
I upgraded a few things but nothing much has changed. I hope this plugin can still run properly.
  
 
This plugin enable you to upload multiple files on a html form without hold `Ctrl` on your keyboard. You can use it for non-ajax or ajax uploading file.

  
  

- [Website](https://adispartadev.github.io/spartan-multi-image-picker/)

  
  

![img](https://adispartadev.github.io/spartan-multi-image-picker/preview1.gif)

  
  
  

### Current New Feature

1. Drag and drop image

2. Direct image uploading

  
  
  

### Installation

  

Download this package or install via bower

  

`bower install spartan-multi-image-picker`

  

Include stylesheet, I recommended to use bootstrap.

```html
<link  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"  rel="stylesheet"  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"  crossorigin="anonymous">
<script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"  integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"  crossorigin="anonymous"></script>
```

  

Include requirement script and this plugin after that like so.

```html
<script  type="text/javascript"  src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script  type="text/javascript"  src="dist/js/spartan-multi-image-picker-min.js"></script>
```

  
  
  

Create an element where do you want to activate this input file.

  

```html
	<div  id="image_picker" class="row"></div>
```

  

Activate this plugin.

  

```js
$("#image_picker").spartanMultiImagePicker({
	fieldName:  'fileUpload[]' // this configuration will send your images named "fileUpload" to the server
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
| `allowedExt` | String | `png\|jpg\|jpeg\|gif` or empty string for all type |
| `placeholderImage` | Object with `image` and `width` properties | `{ image: 'placeholder.png', width: '100%'}` |
| `maxFileSize` | Number (in kb) | `40000` |
| `dropFileLabel` | String | `Drop file here` |
| `directUpload` | Object | See in my example file |

  

### Callback

  

| Callback | Description | Return Param |
| ------ | ------ | ----- |
| `onAddRow` | Called on a new field appear | item count |
| `onRenderedPreview` | Called on image rendered as a preview | item count |
| `onRemoveRow` | Called on user click the remove button for each field | item count |
| `onExtensionErr` | Called on extension didn't match as `allowedExtension` | item count, file |
| `onSizeErr` | Called on image size is more than `maxFileSize` prop | item count, file |

  

### Customize example:

```js
$("#multi_image_picker").spartanMultiImagePicker({
		fieldName     : 'fileUpload[]', // this configuration will send your images named "fileUpload" to the server
		maxCount      : 5,
		rowHeight     : '200px',
		groupClassName: 'col-4',
		maxFileSize   : '',
		dropFileLabel : "Drop Here",
		onAddRow      : function(index){
			console.log(index);
			console.log('add new row');
		},
		onRenderedPreview : function(index){
			console.log(index);
			console.log('preview rendered');
		},
		onRemoveRow : function(index){
			console.log(index);
		},
		onExtensionErr : function(index, file){
			console.log(index, file,  'extension err');
			alert('Please only input png or jpg type file')
		},
		onSizeErr : function(index, file){
			console.log(index, file,  'file size too big');
			alert('File size too big');
		}
	}
);
```

  

### Direct Upload Image

Is this option is true, your file is directly send to serve when file selected. This is a few example code

  
```js
$("#multi_image_picker").spartanMultiImagePicker({
	fieldName     : 'fileUpload[]', // this configuration will send your images named "fileUpload" to the server
	directUpload : {
		status: true,
		loaderIcon: `<div class="spinner-border text-primary"></div>`, // spinner class from bootstrap
		url: 'action.php',
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
