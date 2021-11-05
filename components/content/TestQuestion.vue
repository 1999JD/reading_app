<template>
  <div class="test__question__wrap">
    <div class="test__question__avatar">
      <img src="~/assets/img/tkb.png" alt="" />
    </div>
    <div class="test__question__bubble py-3">
      <h3 class="mx-3 mb-3">
        {{ `1` }}.
        {{
          `我是題目內容我是題目內容我是題目內容我是題目內容我是題目內容我是題`
        }}
      </h3>
      <ul class="mx-7.5">
        <li class="mb-3 py-1 px-3 bg-white rounded-lg">
          A&emsp;{{ `我是選項` }}
        </li>
        <li class="mb-3 py-1 px-3 bg-white rounded-lg">
          B&emsp;{{ `我是選項` }}
        </li>
        <li class="mb-3 py-1 px-3 bg-white rounded-lg">
          C&emsp;{{ `我是選項` }}
        </li>
        <li class="mb-3 py-1 px-3 bg-white rounded-lg">
          D&emsp;{{ `我是選項` }}
        </li>
      </ul>
    </div>
  </div>
</template>
