import Vuex from 'vuex';

export default () => new Vuex.Store({
  state: {
    loading: true,
    navSections: [],
    scrollY: 0,
    splashVisible: true,
  },

  mutations: {
    addSection(state, {name, label, isTop}) {
      state.navSections.push({name, label, isTop});
    },

    removeSection(state, name) {
      state.navSections = state.navSections.filter(x => x.name !== name);
    },

    updateSection(state, {name, newValues}) {
      const section = state.navSections.find(x => x.name === name);
      Object.keys(newValues).forEach((k) => {
        section[k] = newValues[k];
      });
    },

    setScrollY(state, value) {
      state.scrollY = value;
    },

    finishLoading(state) {
      state.loading = false;
    },

    hideSplash(state) {
      state.splashVisible = false;
    },
  },
});
