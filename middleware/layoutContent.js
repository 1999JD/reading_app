

export default function ({ store, route }) {
  let heading
  const routeName = route.name
  switch (routeName) {
    case 'content-media-id':
      heading = '現正播放'
      break
    case 'content-paperbook-id':
      heading = '書籍簡介'
      break
    case 'content-ebook-id':
      heading = '書籍簡介'
      break
    case 'content-test-id':
      heading = '測驗挑戰'
      break
    case 'member-cart':
      heading = '購物清單'
      break
    case 'member-collections':
      heading = '我的收藏'
      break
    case 'member-orderPlan':
      heading = '訂購專區'
      break
    case 'member-orderReceipt':
      heading = '訂購專區'
      break
    case 'member-checkout':
      heading = '付款資訊'
      break
    case 'member-records':
      heading = '購買紀錄'
      break
  }
  store.commit('setHeading', heading)
}