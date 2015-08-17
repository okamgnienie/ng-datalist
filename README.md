ngDatalist
==========
AngularJS directive providing text input with searchable dropdown list.

## Live demo
[link](http://przemyslawhardyn.com/ng-datalist/example/)

## Features
- One file directive, easy to integrate with module bundlers sucha as webpack, gulp etc.
- Searchable dropdown list.
- Option to switch on/off 'require' in the forms.
- Easy to apply custom styles.

## Options
- items (required) - array containing items.
- currentItem (required) - use to get current input value.
- req (optional) - set to true if input should be required in the form.
- styling (optional) - set to false to disable default styles.

## Styling
Switch styling option to false, so that your new styles will work well:

```html
<ng-datalist items=myItems current=currentItem styling="false"><ng-datalist>
```

Now you can start to style elements by yourself using ng-datalist-container class.

```css
/* Directive container */
.ng-datalist-container {
    border: 1px solid #020D45;
    height: 50px;
    width: 300px;
}

/* Directive input */
.ng-datalist-container input:focus {
    border-color: #13B3AB;
}
/* by direct class */
.ng-datalist-input:focus {
    border-color: #13B3AB;
}

/* Directive list */
.ng-datalist-container ul {
    max-height: 100px;
}
/* by direct class */
.ng-datalist-list {
    max-height: 100px;
}

/* Directive list item */
.ng-datalist-container li {
    color: #020D45;
}
/* by direct class */
.ng-datalist-item {
    color: #020D45;
}
```

## Licence
The MIT License (MIT)

