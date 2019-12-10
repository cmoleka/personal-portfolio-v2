/* Site content language set through state */

export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

// export const actions = {

// }
