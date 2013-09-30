/**
 * Drag N' Drop Ractive Event
 * 
 * @param  {Object}   node DOM Node
 * @param  {Function} fire Method to fire back data to ractive.on
 * @return {Object}        Teardown method
 * @author  Nijiko Yonskai
 * @copyright  2013
 */
Ractive.eventDefinitions.draggable = function ( node, fire ) {
  var $self = Ractive.eventDefinitions.draggable;

  var foreach = function (n, next) {
    if (n.length) Array.prototype.forEach.call(n, next);
  };

  var Drag = {
    event: function (name) {
      return function (event) {
        if (name === 'drag_start') 
          $self.current = node;

        fire({
          node: $self.current || node,
          source: node,
          name: name,
          type: name.split('_')[1],
          target: this,
          original: event,
          previous: $self.previous
        });

        if (name === 'drag_enter')
          $self.previous = node;

        if (name === 'drag_end') 
          $self.current = null;
      };
    }
  };
  
  node.draggable = true;
  node.addEventListener('dragstart', Drag.event('drag_start'));
  node.addEventListener('dragenter', Drag.event('drag_enter'));
  node.addEventListener('dragover', Drag.event('drag_over'));
  node.addEventListener('dragleave', Drag.event('drag_leave'));
  node.addEventListener('drop', Drag.event('drag_drop'));
  node.addEventListener('dragend', Drag.event('drag_end'));

  return {
    teardown: function () {
      node.draggable = true;
      node.removeEventListener('dragstart', Drag.event('drag_start'));
      node.removeEventListener('dragenter', Drag.event('drag_enter'));
      node.removeEventListener('dragover', Drag.event('drag_over'));
      node.removeEventListener('dragleave', Drag.event('drag_leave'));
      node.removeEventListener('drop', Drag.event('drag_drop'));
      node.removeEventListener('dragend', Drag.event('drag_end'));
    }
  };
};

Ractive.eventDefinitions.draggable.current = null;
Ractive.eventDefinitions.draggable.previous = null;