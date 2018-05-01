import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    var mod = Ember.ArrayProxy.extend({
          arrangedContent: Ember.computed.sort('content', 'props'),
          props: ['id:asc']
        }).create({
          content: this.store.peekAll('mitfahrer')});

    if (mod.content.content.length === 0) {
      this.store.createRecord('mitfahrer', {
        'number': 1,
        'type': 1,
        'nacht1': true,
        'nacht2': true,
        'nacht3': true,
        'nacht4': true,
        'nacht5': true,
        'nacht6': true,
        'nacht7': false,
        'nacht8': false,
        'nacht9': false,
        'deletable': false
      });
    }

    return mod;},

  actions: {
    'addMf': function(){
      var prev = this.modelFor('mitfahrer/index').get('lastObject');

      this.store.createRecord('mitfahrer', {
        'number': prev.get('number') + 1,
        'type': prev.get('type'),
        'nacht1': prev.get('nacht1'),
        'nacht2': prev.get('nacht2'),
        'nacht3': prev.get('nacht3'),
        'nacht4': prev.get('nacht4'),
        'nacht5': prev.get('nacht5'),
        'nacht6': prev.get('nacht6'),
        'nacht7': prev.get('nacht7'),
        'nacht8': prev.get('nacht8'),
        'nacht9': prev.get('nacht9'),
        'deletable': true
      });

}
  }

});
