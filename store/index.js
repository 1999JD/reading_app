// import Vue from 'vue'

export const state = () => ({
  heading: 'default',
  backRoute: 'default',
  auth: {
    user: {
      name: 'Joyce'
    },
    loggedIn: false,
  },
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
  ],
  shoppingList: [
    {
      bookId: 0,
      name: '教育情緣 - 回首七十人生教育路回首七十人生',
      author: '吳清基',
      imgSrc: 'sampleBook.jpg',
      price: 225,
      checked: false,
    },
    {
      bookId: 1,
      checked: true,
      imgSrc: 'sampleBook.jpg',
      name: '教育情緣 - 回首七十人生教育路',
      author: '吳清基',
      price: 300,
    },
  ],
  billList: [],
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
    // console.log(Vue.store.state.heading)
    commit('addCollection', {
      ...payload
    })
  },
  handleDelCollection({ commit }, payload) {
    commit('delCollections', payload)
  },
  handleAddShoppingList({ commit }, payload) {
    commit('addShoppingList', {
      ...payload
    })
  },
  handleDelShoppingList({ commit }) {
    commit('delShoppingList')
  },
  handleLogin({ commit }, isLogin) {
    commit('setLogin', isLogin)
  },
}

export const mutations = {
  setHeading(state, heading) {
    state.heading = heading
  },
  setBackRoute(state, route) {
    state.backRoute = route
  },
  addCollection(state, payload) {
    if (!state.auth.loggedIn) {
      alert('請登入再完成此操作')
      return false
    }
    state.collections.push({ ...payload })
  },
  delCollections(state, bookId) {
    state.collections = state.collections.filter((element) => {
      return element.bookId !== bookId
    })
  },
  checkShoppingListItem(state, bookId) {
    const isBook = state.shoppingList.findIndex(
      (element) => element.bookId === bookId
    )
    state.shoppingList[isBook].checked = !state.shoppingList[isBook].checked
  },
  selectAllShoppingListItem(state, payload) {
    state.shoppingList.forEach(element => { element.checked = payload })
  },
  addShoppingList(state, payload) {
    const isExist = state.shoppingList.findIndex((element =>
      element.bookId === payload.bookId
    ))
    if (isExist !== -1) {
      alert('此商品已在購物車')
      return false
    }
    const newBook = {
      bookId: payload.bookId,
      checked: false,
      imgSrc: payload.imgSrc,
      name: payload.name,
      author: payload.author,
      price: payload.price,
    }
    state.shoppingList.push(newBook)
    alert('加入成功')
    return false
  },
  delShoppingList(state) {
    const msg = '您真的確定要刪除嗎？\n\n請確認！'
    if (!confirm(msg)) return false
    state.shoppingList = state.shoppingList.filter((element) => {
      return element.checked === false
    })
  },
  beforeJumpToCheckout(state) {
    state.billList = state.shoppingList.filter((element) => {
      return element.checked === true
    })
    if (state.billList.length !== 0) this.$router.push('/member/checkout')
    else {
      alert('您未挑選任何商品')
      return false
    }
  },
  setLogin(state, isLogin) {
    state.auth.loggedIn = isLogin
  },

}