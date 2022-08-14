import drag from "v-drag"
import Vue from 'vue'

Vue.use(drag, {
  eventClass: {
    down: "is-pressed",
    move: "is-moving"
  }
});