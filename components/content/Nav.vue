<template>
  <ul class="flex">
    <li v-for="nav in navs" :key="nav.text">
      <button>
        <img :src="nav.icon" />
        <span>{{ nav.text }}</span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ContentNav',
  data() {
    return {
      navs: [
        {
          icon: '',
          text: '電子書',
        },
        {
          icon: '',
          text: '實體書',
        },
        {
          icon: '',
          text: '我要測驗',
        },
      ],
    }
  },
}
</script>
