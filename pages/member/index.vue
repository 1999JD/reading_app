<template>
  <main class="py-2 bg-primary">
    <nav class="flex justify-end px-6">
      <a class="w-7 mr-3">
        <img src="~/assets/icon/layout/mailbox.svg" alt="訊息" class="" />
      </a>
      <a class="w-7">
        <img src="~/assets/icon/layout/settings.svg" alt="設定" class="" />
      </a>
    </nav>
    <div class="flex items-center mb-3 px-6">
      <div class="block rounded w-16 mr-4">
        <img src="~/assets/icon/layout/account-big.svg" alt="大頭貼" />
      </div>
      <h2 class="text-base">{{ $store.state.auth.user.name }}</h2>
    </div>
    <section
      class="
        flex
        items-center
        mx-20
        mb-10
        py-3.5
        px-3
        bg-white
        border border-yellow
        rounded-lg
      "
    >
      <h3 class="mr-1.5 text-base">我的T幣</h3>
      <div class="block rounded w-9 mr-4">
        <img src="~/assets/icon/member/cash.png" />
      </div>
      <p class="text-tangerine font-bold">
        $<span class="text-xl">50.00</span>
      </p>
      <a class="block w-6 ml-auto"
        ><img src="~/assets/icon/member/ahead.svg" alt="前往"
      /></a>
    </section>

    <nav
      class="flex justify-between mx-6 mb-6 pt-6 pb-4 px-4 bg-white rounded-lg"
    >
      <MemberIcon
        v-for="link in contentPageLinks"
        :key="link.title"
        :alt="link.alt"
        :to="link.to"
        :src="link.src"
        >{{ link.title }}
      </MemberIcon>
    </nav>
    <section class="mx-6 mb-6 pt-2 pb-5 px-6 rounded-lg bg-white">
      <h3 class="mb-5 text-lg font-medium">里程碑</h3>
      <nav class="flex justify-between">
        <MemberIcon
          v-for="link in recordsLinks"
          :key="link.title"
          :alt="link.alt"
          :to="link.to"
          :src="link.src"
          >{{ link.title }}
        </MemberIcon>
      </nav>
    </section>
    <section class="mx-6 mb-6 pt-2 pb-5 px-6 rounded-lg bg-white">
      <h3 class="mb-5 text-lg font-medium">訂購專區</h3>
      <nav class="flex justify-between">
        <MemberIcon
          v-for="link in orderLinks"
          :key="link.title"
          :alt="link.alt"
          :to="link.to"
          :src="link.src"
          >{{ link.title }}
        </MemberIcon>
      </nav>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MemberCenter',
  data() {
    return {
      contentPageLinks: [
        {
          title: '購物車',
          src: 'record.png',
          alt: '購物車',
          to: '/member/cart',
        },
        {
          title: '購買紀錄',
          src: 'record.png',
          alt: '購買紀錄',
          to: '/member/records',
        },
        {
          title: '我的收藏',
          src: 'store.png',
          alt: '我的收藏',
          to: '/member/collections',
        },
        {
          title: '我的優惠券',
          src: 'coupon.png',
          alt: '我的優惠券',
          to: '/member/coupon',
        },
      ],
      recordsLinks: [
        { title: '每日簽到', src: 'check.png', alt: '每日簽到', to: 'sign' },
        {
          title: '學習紀錄',
          src: 'learning_record.png',
          alt: '學習紀錄',
          to: '/member/records',
        },
        {
          title: '任務挑戰',
          src: 'assignment.png',
          alt: '任務挑戰',
          to: '/member/challenge',
        },
        { title: '積分', src: 'grading.png', alt: '積分', to: 'content' },
      ],
      orderLinks: [
        {
          title: '熱門商品',
          src: 'bestseller.png',
          alt: '熱門商品',
          to: '/member/hit',
        },
        {
          title: '訂閱方案',
          src: 'subscribe.png',
          alt: '訂閱方案',
          to: '/member/orderPlan',
        },
        {
          title: '團購方案',
          src: 'group_buying.png',
          alt: '團購方案',
          to: '/member/groupBuy',
        },
        {
          title: '周邊商品',
          src: 'merchandising.png',
          alt: '周邊商品',
          to: '/member/merch',
        },
      ],
    }
  },
}
</script>

<style scoped>
main::before {
  content: '';
  background-image: linear-gradient(180deg, #fff 46.35%, #f5efdf 100%);
  z-index: -1;
  @apply absolute top-0  w-full h-45;
}
</style>
