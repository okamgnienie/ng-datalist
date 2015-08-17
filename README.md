ngDatalist
==========
AngularJS directive providing text input with searchable dropdown list.
Configurable and easy to be styled.

## Features
- One file directive, easy to integrate with module bundlers webpack, gulp etc.
- Searchable dropdown list.
- Easy switch on/off require in the forms.
- Easy to apply custom styles.

## Example

## Options
- items (required)
- currentItem (required)
- req (optional)
- styling (optional)

## Styling
Set styling option to false:

'''
<ng-datalist items=myItems current=currentItem styling="false"><ng-datalist>
'''

Now you can start to style elements by yourself using ng-datalist-container class.

'''
.ng-datalist-container {
    border: 1px solid #020D45;
    height: 50px;
    width: 300px;
}

.ng-datalist-container input:focus {
    border-color: #13B3AB;
}

.ng-datalist-container ul {
    max-height: 100px;
}

.ng-datalist-container li {
    color: #020D45;
}
'''

## Licence
The MIT License (MIT)
