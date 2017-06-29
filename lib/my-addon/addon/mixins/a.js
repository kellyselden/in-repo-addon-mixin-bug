import Ember from 'ember';
import RunMixin from 'ember-lifeline/mixins/run';

export default Ember.Mixin.create(RunMixin, {
  beforeModel() {
    this.runTask(() => {
    }, 1);
  }
});
