<template>
  <div>
    <div class="test__question__wrap">
      <div class="test__question__avatar">
        <img src="~/assets/img/tkb.png" alt="" />
      </div>
      <div class="test__question__bubble py-3">
        <h3 class="mx-3 mb-3">
          {{ question.qNumber }}.
          {{ question.topic }}
        </h3>
        <ul class="mx-7.5">
          <li
            v-for="option in question.options"
            :key="option.index"
            :class="[
              answer.answer === option.index ? 'bg-red' : 'bg-white',
              'w-52 mx-auto mb-3 py-1 px-3  rounded-lg',
            ]"
            @click="$emit('onClick', questionIndex, option.index)"
          >
            {{ option.index }}&emsp;{{ option.desc }}
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade">
      <ContentTestUserAnswer
        v-show="answer.hasAnswer"
        :answer="answer.answer"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TestQuestion',
  props: {
    question: {
      type: Object,
      default() {
        return {
          qNumber: 1,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        }
      },
    },
    answer: {
      type: Object,
      default() {
        return {
          answer: '',
          hasAnswer: false,
        }
      },
    },
    questionIndex: {
      type: Number,
      default() {
        return 0
      },
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
