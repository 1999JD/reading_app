<template>
  <div class="test__question__wrap">
    <div class="test__question__avatar">
      <img src="~/assets/img/tkb.png" alt="" />
    </div>
    <div class="test__question__bubble test__question__result">
      <div class="relative w-35 h-35 mt-6 mx-auto mb-8 bg-white rounded-full">
        <div
          class="turntable__outside turntable__center-position w-31 h-31"
          :style="{
            '--percent': percent,
            '--maskStatus': maskStatus,
            'clip-path': outsideStatus,
          }"
        ></div>
        <div
          class="
            turntable__inside turntable__center-position
            z-30
            flex flex-col
            justify-center
            items-center
            bg-yellow
            rounded-full
          "
        >
          <p class="text-4xl">{{ score }}</p>
          <span class="text-base">分</span>
        </div>
      </div>
      <p class="text-2xl text-white text-center font-bold">
        共答對{{ count }}題
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestResult',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    percent() {
      return `rotate(${(360 / this.total) * this.count}deg)`
    },
    maskStatus() {
      return (360 / this.total) * this.count > 180 ? '#FFC651' : 'white'
    },
    outsideStatus() {
      return (360 / this.total) * this.count > 180
        ? 'unset'
        : 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'
    },
    score() {
      return (100 / this.total) * this.count
    },
  },
}
</script>

<style scoped>
:host {
  --percent: 0;
  --maskStatus: bg-white;
}
.test__question__result {
  background-image: url('~/assets/img/bg-star.jpeg');
  width: 16.25rem;
  height: 17.25rem;
  @apply bg-no-repeat bg-cover bg-center;
}
.turntable__outside {
  @apply rounded-full overflow-hidden;

  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
}
.turntable__outside::before {
  content: '';
  @apply block absolute z-10 w-2/4 h-full bg-yellow;

  transform-origin: right center;
  transform: var(--percent);
}
.turntable__outside::after {
  content: '';
  transform-origin: bottom center;
  transform: rotate(90deg);
  background-color: var(--maskStatus);

  @apply block h-2/4;
}
.turntable__inside {
  width: 94px;
  height: 94px;
  background-color: #fffbd8;
  color: #976500;
}
.turntable__center-position {
  @apply absolute top-0 right-0 bottom-0 left-0 m-auto;
}
</style>
