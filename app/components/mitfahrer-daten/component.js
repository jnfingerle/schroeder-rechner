import Ember from 'ember';
import mitfahrerTypen from '../../helpers/mitfahrer';

export default Ember.Component.extend({
  mitfahrerTypen: mitfahrerTypen,
  actions: {
    selectTyp: function(auswahl) {
      this.set('model.type', auswahl.id);

      return false;
    },
    delete: function() {
      this.get('model').destroyRecord();
    }

  },

  typeName: Ember.computed('model.type', function() {
    return mitfahrerTypen.filterBy('id', this.get('model.type'))[0].name;
  })
});
