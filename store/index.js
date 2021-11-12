export const state = () => ({
  authPageHeading: 'default',
  contentPageHeading: 'default',
  memberPageHeading: 'default',
  collections: [
    {
      bookId: 1,
      name: '素養人才',
      desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小容',
      author: '一路',
      publishTime: '2021-06-30',
      imgSrc: 'sampleBook.jpg',
      imgAlt: '',
    },
    {
      bookId: 2,
      name: '人才人才',
      desc: '書本小標內容書本小標內容',
      author: '一路',
      publishTime: '2021-06-30',
      imgSrc: 'sampleBook.jpg',
      imgAlt: '',
    },
    {
      bookId: 3,
      name: '素養素養素養',
      desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
      author: '一路',
      publishTime: '2021-06-30',
      imgSrc: 'sampleBook.jpg',
      imgAlt: '',
    }
  ]
})

export const getters = {
  isCollection: (state) => (bookId) => {
    const isTheSame = state.collections.findIndex(
      (element) => element.bookId === bookId
    )
    if (isTheSame !== -1) return true
    else return false
  }
}

export const actions = {
  handleAddCollection({ commit }, payload) {
    commit('addCollection', {
      ...payload
    })
  },
  handleDelCollection({ commit }, payload) {
    commit('delCollections', payload)
  }
}

export const mutations = {
  setAuthPageHeading(state, heading) {
    state.authPageHeading = heading
  },
  setContentPageHeading(state, heading) {
    state.contentPageHeading = heading
  },
  setMemberPageHeading(state, heading) {
    state.memberPageHeading = heading
  },
  addCollection(state, payload) {
    state.collections.push({ ...payload })
  },
  delCollections(state, bookId) {
    state.collections = state.collections.filter((element) => {
      return element.bookId !== bookId
    })
  }
}