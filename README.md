# ractive.drag.drop.js

Native HTML5 Drag N' Drop ractive event definition.

## Usage

After including [ractive](https://github.com/Rich-Harris/Ractive) and `ractive.drag.drop.js`:

**Template**

```html
<ul proxy-dragndrop='dragndrop-items'>
  {{#items:i}}
    <li>{{items[i]}}</li>
  {{/items}}
</ul>
```

**Code**

Ractive Boilerplate

```js
ractive = new Ractive({
  el: containerElement,
  template: templateElement,
  data: {
    items: [
      'One', 'Two', 'Three'
    ]
  }
});
```

Now any drag / drop action can be caught:

```js
ractive.on('dragndrop-items', function (event) {
  console.log(event);
});
```

## Event Object

- `name` Event name, underscore seperated: `drag_drop`, `drag_start`
- `type` Event type: `drop`, `start`
- `target` Element being dragged or dropped.
- `original` Native DOM Event
