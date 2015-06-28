import DS from 'ember-data';
import Ember from 'ember';
import mitfahrerTypen from '../helpers/mitfahrer';

export default DS.Model.extend({
  number: DS.attr('number'),
  type: DS.attr('number'),
  nacht1: DS.attr('boolean'),
  nacht2: DS.attr('boolean'),
  nacht3: DS.attr('boolean'),
  nacht4: DS.attr('boolean'),
  nacht5: DS.attr('boolean'),
  nacht6: DS.attr('boolean'),
  nacht7: DS.attr('boolean'),
  nacht8: DS.attr('boolean'),
  nacht9: DS.attr('boolean'),
  deletable:  DS.attr('boolean'),

  anzahlNaechte: Ember.computed('nacht1','nacht2','nacht3','nacht4','nacht5','nacht6','nacht7','nacht8','nacht9',
  function(){
    return this.get('nacht1') +
      this.get('nacht2') +
      this.get('nacht3') +
      this.get('nacht4') +
      this.get('nacht5') +
      this.get('nacht6') +
      this.get('nacht7') +
      this.get('nacht8') +
      this.get('nacht9');}),

  kosten: Ember.computed('type', 'anzahlNaechte', function(){
    var type = this.get('type');
    var typ = mitfahrerTypen.filterBy('id', type)[0];
    return typ.sockel + this.get('anzahlNaechte')*typ.nacht;
  })

});
