<template>
  <main class="pt-4 px-6 pb-20">
    <section class="
    ">
      <div
        class="
          flex
          justify-between
          items-center
          py-3
          px-4
          border-b border-gray-200
        "
      >
        <label class="flex items-center">
          <input
            type="checkbox"
            class="w-5 h-5 rounded"
            :checked="selectAll"
            @input="handleSelectAll(selectAll)"
          />
          <span class="ml-2 font-medium">全選</span>
        </label>
        <button
          class="mr-2 text-xs font-medium"
          @click.prevent="handleDelShoppingList"
        >
          刪除
        </button>
      </div>
      <ul class="mb-12 px-4 py-3 pb-5">
        <li
          v-for="(item, index) in shoppingList"
          :key="item.bookId"
          :class="[
            index === shoppingList.length - 1 && 'mt-6',
            'flex items-center gap-2',
          ]"
        >
          <input
            :checked="item.checked"
            type="checkbox"
            name="edit"
            class="flex-grow-0 flex-shrink-0 w-5 h-5 rounded"
            @input="checkShoppingListItem(item.bookId)"
          />
          <div class="flex gap-1.5">
            <div class="flex-grow-0 flex-shrink-0 w-13">
              <img :src="require(`~/assets/img/${item.imgSrc}`)" alt="" />
            </div>
            <div>
              <h3
                class="mb-1.5 font-medium line-clamp-1"
                @click.prevent="$router.push(`/content/media/${item.bookId}`)"
              >
                {{ item.name }}
              </h3>
              <p class="mb-1.5 text-xs">作者：{{ item.author }}</p>
              <p class="text-tangerine font-medium">${{ item.price }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <nav class="grid grid-cols-2 gap-3.5">
      <NuxtLink
        to="/"
        class="inline-flex justify-center py-2 border border-yellow rounded"
      >
        <div class="w-4">
          <img src="" alt="" />
        </div>
        繼續購物
      </NuxtLink>
      <button
        class="inline-flex justify-center py-2 bg-yellow rounded"
        @click.prevent="beforeJumpToCheckout"
      >
        <div class="w-4">
          <img src="" alt="" />
        </div>
        前往結帳
      </button>
    </nav>
  </main>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Cart',
  layout: 'member',
  data() {
    return {
      selectAll: false,
      editShow: false,
    }
  },
  computed: {
    shoppingList() {
      return this.$store.state.shoppingList
    },
  },
  created() {
    this.selectAllShoppingListItem(this.selectAll)
  },
  methods: {
    handleDelete() {
      this.editShow = !this.editShow
    },
    handleSelectAll() {
      this.selectAll = !this.selectAll
      this.selectAllShoppingListItem(this.selectAll)
    },
    ...mapMutations(['selectAllShoppingListItem']),
    ...mapMutations(['checkShoppingListItem']),
    ...mapActions(['handleDelShoppingList']),
    ...mapMutations(['beforeJumpToCheckout']),
  },
}
</script>
