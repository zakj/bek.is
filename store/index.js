import Vuex from 'vuex';

export default () => new Vuex.Store({
  state: {
    currentNav: null,
    navSections: [],
  },

  mutations: {
    addSection(state, {name, label}) {
      state.navSections.push({name, label});
    },

    removeSection(state, name) {
      state.navSections = state.navSections.filter(section => section.name !== name);
    },
  },
});
