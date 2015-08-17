ngDatalist
==========
AngularJS directive providing text input with searchable dropdown list.

## Live demo
[link](http://przemyslawhardyn.com/ng-datalist/example/)

## Features
- One-file directive, easy to integrate with module bundlers such as webpack, gulp etc.
- Searchable dropdown list.
- Option to switch on/off 'require' in the forms.
- Easy to apply custom styles.

## Getting started
1. Attach directive to your application just after AngularJS framework:
    ```html
    <script src="./angular.min.js"></script>
    <script src="./ng-datalist/dist/ng-datalist.js"></script>
    ```

2. Add 'ng-datalist' module to your application dependencies:
    ```javascript
    angular.module('myApp', ['ng-datalist']);
    ```

3. Insert directive to the application:
    ```html
    <ng-datalist items=myAwesomeList current=myElement></ng-datalist>
    ```

## Directive Options
- items   {Array}   (required) - array containing items to be displayed on the list.
- current {string}  (required) - use to get/set current input value.
- req     {boolean} (optional) - set to true if input should be required by the form.
- styling {boolean} (optional) - set to false to disable default styles.

## Styling
Switch styling option to false, so that your new styles will work well:
```html
<ng-datalist items=myItems current=currentItem styling="false"><ng-datalist>
```

Now you can start to style elements by yourself using ng-datalist-container class or by accessing directly by class name:
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

## License
The MIT License (MIT)

