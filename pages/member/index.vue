<template>
  <div class="h-screen pb-28 bg-primary">
    <div class="flex justify-end">
      <img src="" alt="訊息" class="" />
      <img src="" alt="設定" class="" />
    </div>
    <div class="flex mb-4">
      <div class="block rounded w-9 h-9 mr-4">
        <img src="./" alt="大頭貼" />
      </div>
      <h2>使用者名稱</h2>
    </div>
    <div
      class="flex max-w-max mx-auto mb-10 py-3.5 pl-4 pr-5 bg-white rounded-lg"
    >
      <h3 class="mr-1.5">我的T幣</h3>
      <div class="block rounded w-16 h-16 mr-4"><img src="./" /></div>
      <p class="">$<span>50.00</span></p>
      <a href=""><img src="" alt="前往" /></a>
    </div>
    <nav class="flex justify-evenly mx-6 mb-6 pt-6 pb-4 bg-white">
      <MemberIcon
        v-for="link in contentPageLinks"
        :key="link.title"
        :src="link.src"
        :alt="link.alt"
        :to="link.to"
        >{{ link.title }}
      </MemberIcon>
    </nav>
    <div class="mb-6 pt-2 pb-5 bg-white">
      <h3 class="mb-6">里程碑</h3>
      <nav class="flex justify-evenly">
        <MemberIcon
          v-for="link in recordsLinks"
          :key="link.title"
          :src="link.src"
          :alt="link.alt"
          :to="link.to"
          >{{ link.title }}
        </MemberIcon>
      </nav>
    </div>
    <div class="pt-2 pb-5 bg-white">
      <h3 class="mb-6">訂購專區</h3>
      <nav class="flex justify-evenly">
        <MemberIcon
          v-for="link in orderLinks"
          :key="link.title"
          :src="link.src"
          :alt="link.alt"
          :to="link.to"
          >{{ link.title }}
        </MemberIcon>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberCenter',
  data() {
    return {
      contentPageLinks: [
        { title: '購買紀錄', src: 'man', alt: '購買紀錄', to: '/content' },
        { title: '我的收藏', src: 'man', alt: '我的收藏', to: '/content' },
        {
          title: '我的優惠券',
          src: 'man',
          alt: '我的優惠券',
          to: '/content',
        },
      ],
      recordsLinks: [
        { title: '每日簽到', src: 'man', alt: '每日簽到', to: '/content' },
        { title: '學習紀錄', src: 'man', alt: '學習紀錄', to: '/content' },
        { title: '任務挑戰', src: 'man', alt: '任務挑戰', to: '/content' },
        { title: '積分', src: 'man', alt: '積分', to: '/content' },
      ],
      orderLinks: [
        { title: '熱門商品', src: 'man', alt: '熱門商品', to: '/content' },
        { title: '訂閱方案', src: 'man', alt: '訂閱方案', to: '/content' },
        { title: '團購方案', src: 'man', alt: '團購方案', to: '/content' },
        { title: '周邊商品', src: 'man', alt: '周邊商品', to: '/content' },
      ],
    }
  },
}
</script>
