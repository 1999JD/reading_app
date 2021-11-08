<template>
  <main class="flex-grow">
    <p
      class="
        fixed
        w-full
        p-0.5
        bg-primary-dark
        text-center text-white text-base
      "
    >
      {{ (currentQuestion + 1).toString() }}/{{ totalQuestion.toString() }}
    </p>
    <section ref="scrollContainer" class="mt-12 mx-6">
      <transition-group name="fade">
        <ContentTestQuestion
          v-for="(question, index) in questions"
          v-show="index < currentQuestion + 1"
          :key="question.qNumber"
          :question="question"
          :answer="answers[index]"
          :question-index="index"
          @onClick="handleInputAnswer"
        />
      </transition-group>
      <ContentTestEndBubble v-show="currentQuestion === 9" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'Test',
  layout: 'content',
  data() {
    return {
      totalQuestion: 10,
      currentQuestion: 0,
      answers: [],
      questions: [
        {
          qNumber: 1,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 2,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 3,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 4,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 5,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 6,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 7,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 8,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 9,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
        {
          qNumber: 10,
          topic: '茉莉花.太陽花.玫瑰花,哪一朵花最沒力 ?',
          options: [
            { index: 'A', desc: '茉莉花' },
            { index: 'B', desc: '太陽花' },
            { index: 'C', desc: '玫瑰花' },
            { index: 'D', desc: '都不是' },
          ],
          correctAns: 'A',
        },
      ],
    }
  },
  created() {
    this.questions.forEach((_element) => {
      this.answers.push({
        answer: '',
        hasAnswer: false,
      })
    })
  },
  methods: {
    handleInputAnswer(questionIndex, optionIndex) {
      this.answers[questionIndex].answer = optionIndex
      this.answers[questionIndex].hasAnswer = true
      if (questionIndex === this.currentQuestion) {
        this.currentQuestion++
        this.scrollBottom()
      }
    },
    scrollBottom() {
      this.$nextTick(() => {
        document.documentElement.scrollTop =
          document.documentElement.scrollHeight
      })
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
