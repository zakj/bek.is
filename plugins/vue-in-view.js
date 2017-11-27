import Vue from 'vue';
import inView from 'in-view';
import uniqid from 'uniqid';


Vue.directive('in-view', {
  bind(el, binding) {
    if (!['enter', 'exit'].includes(binding.arg)) {
      throw new Error('v-in-view must be bound with :enter or :exit');
    }
    if (typeof binding.value !== 'function') {
      throw new Error('v-in-view must be bound to a function');
    }
    if (!el.dataset.inView) {
      el.dataset.inView = uniqid();
    }
    inView(`[data-in-view="${el.dataset.inView}"]`).on(binding.arg, binding.value);
  },

  unbind(el) {
    delete el.dataset.inView;
  },
});
