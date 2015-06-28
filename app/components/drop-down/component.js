import Ember from 'ember';

export default Ember.Component.extend({
  selectedText: Ember.computed('selected', 'selectionList',
    function(){
      var selected = this.get('selected');
      var entry;
      for (entry of this.get('selectionList')){
        if (entry.id === selected) {return entry.name;}
      }

      return 'unknown (' + selected + ')';
    }),
  actions: {
    select: function(thing) {
      this.sendAction('select', thing);
    }
  }
});
