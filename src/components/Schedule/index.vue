<template>
  <div class="sc-schedule">
    <ScContent :rows="rows" :title="title" :month="month" @change="onSelectDate" />
    <ScCalendar :rows="rows" :cell-render="cellRender" :month="month" @change="onSelectDate" />
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import ScCalendar from './ScCalendar.vue'
import ScContent from './ScContent.vue'

const props = defineProps({
  title: {
    type: String,
    default: '名称'
  },
  month: {
    type: String,
    required: false,
    default: ''
  },
  rows: {
    type: Array,
    required: false,
    default: (_) => []
  },
  cellRender: {
    type: Function,
    required: false,
    default: () => []
  }
})

const date = ref(props.month ? props.month : dayjs().format('YYYY-MM'))

const emit = defineEmits(['change'])
function onSelectDate(date) {
  // date.value = date
  emit('change', date)
}
</script>

<style lang="scss" scoped>
.sc-content {
  border-radius: 4px 0px 0px 4px;
}
.sc-schedule {
  overflow: hidden;
  display: flex;
  min-width: 1000px;
}

.sc-calendar {
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0px 4px 4px 0px;
  border-left: 0;
}
</style>
