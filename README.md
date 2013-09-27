# ractive.drag.drop.js

Native HTML5 Drag N' Drop ractive event definition.

## Usage

After including `ractive` and `ractive.drag.drop.js`:

**Template**
```html
<script type="text/ractive" id="template">
  <ul proxy-dragndrop='dragndrop-items'>
    {{#items:i}}
      <li>{{items[i]}}</li>
    {{/items}}
  </ul>
</script>
```

Now any drag / drop action can be caught:

**Code**
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