import Ember from 'ember';

export default Ember.Controller.extend({
  kinderBonus: false,
  gesamtSumme: Ember.computed('model.@each.kosten', function(){
    var summe = 0;

    var kinder = [];

    this.get('model').forEach(function(thing) {
      if (thing.get('type')===3){
        kinder.push(thing.get('kosten'));
      }
      else {
        summe += thing.get('kosten');
      }
    });

    kinder.sort();

    if (kinder.length>0) {summe += kinder.pop();}
    if (kinder.length>0) {summe += kinder.pop();}

    this.set('kinderBonus', kinder.length>0);

    return summe;
  })
});
