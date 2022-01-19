import { createStore } from 'vuex'
import { HTTP } from '../utils/https-common';

export default createStore({
  state: {
    imageData: [],
    singleImageData: {},
    per_page: 8,
    page: 1,
    errors: [],
    loading: false,
    searchValue: 'African',
    displayModal: false,
  },
  mutations: {
  },
  actions: {
    async fetchSearch(context) {
      const { state } = context;
      try {
        const response = await HTTP.get(
          `/search/photos?query=${state.searchValue}&per_page=${
            state.per_page
          }&page=${1}`
        );
      } catch (e) {
        state.errors.push(e);
      }
    },

  },
  modules: {
  }
})
