<template>
  <mu-date-input
    icon='today'
    v-model='store[type]'
    v-on:change='updateData'
    :label='label'
    container='dialog'
    label-float
    full-width
    :date-time-format='enDateFormat'
  ></mu-date-input>
</template>

<script>
import store from '@/store.js'

const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const enDateFormat = {
  formatDisplay(date) {
    return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`
  },
  formatMonth(date) {
    return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`
  },
  getWeekDayArray(firstDayOfWeek) {
    let beforeArray = []
    let afterArray = []
    for (let i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i])
      } else {
        beforeArray.push(dayAbbreviation[i])
      }
    }
    return beforeArray.concat(afterArray)
  },
  getMonthList() {
    return monthList
  },
}


export default {
  props: ['label', 'type'],
  data() {
    return {
      store: store.data,
      enDateFormat,
    }
  },
  methods: {
    updateData() {
      store.methods.updateData()
    }
  },
}
</script>