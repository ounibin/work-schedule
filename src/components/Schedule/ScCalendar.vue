<template>
  <div class="sc-calendar">
    <div class="sc-calendar-header">
      <button @click="prevMonth">上个月</button>
      <span>{{ monthStr }}</span>
      <button @click="nextMonth">下个月</button>
    </div>
    <div class="sc-calendar-table">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th v-for="(day, index) in days" :key="index" class="">
              <div class="cell">{{ day }}</div>
            </th>
          </tr>
          <tr>
            <th v-for="(day, index) in days" :key="index" class="{`${weekEnd}`}">
              <div class="cell">周日</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="cell">{{ cellRender(date, rows) }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps({
  // 初始月份
  month: {
    type: String,
    default: ''
  },
  rows: {
    type: Array,
    required: false,
    default: (_) => []
  },
  cellRender: {
    type: Function,
    default: () => {}
  }
})

const date = computed(() => {
  return dayjs(props.month)
})

// 该月总天数
const days = computed(() => {
  // date.daysInMonth()
  return 31
})

const monthStr = computed(() => {
  return props.month
})

function prevMonth() {}

function nextMonth() {}
</script>

<style lang="scss" scoped>
.sc-calendar {
  position: relative;
}
.sc-calendar-header,
.sc-calendar-table {
  width: 100%;
}

.sc-calendar-header {
  height: 30px;
  background: #f3f3f3;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 2px 5px;
    font-size: 12px;
    padding: 3px 10px;
  }
}

.sc-calendar-table {
  min-height: 300px;
  overflow: auto;
  padding-bottom: 30px;
}

.sc-calendar-table table {
  table-layout: fixed;
  min-width: 840px;
  border-collapse: collapse;
}

.sc-calendar-table td,
.sc-calendar-table th {
  border: 1px solid rgba(0, 0, 0, 0.3);
  vertical-align: middle;
  transition: background-color 0.2s ease;
  overflow: hidden;
  max-height: 30px;
  max-width: 30px;
  padding: 0;
  margin: 0;
}

.sc-calendar-table tr td:first-child,
.sc-calendar-table tr th:first-child {
  border-left: 0;
}
.sc-calendar-table tr td:last-child,
.sc-calendar-table tr th:last-child {
  border-right: 0;
}

.sc-calendar-table table td > .cell,
.sc-calendar-table table th > .cell {
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  overflow: hidden;
  text-align: center;
  word-break: keep-all;
  text-overflow: ellipsis;
}

.sc-calendar-table table thead th {
  color: #606266;
  background: #f3f3f3;
  font-size: 12px;
  line-height: 30px;
}

.sc-calendar-table table thead .weekend {
  color: #2196f3;
}

.sc-calendar-table table thead th.today {
  background: #ffeb3b;
}

.sc-calendar-table table tbody td,
.sc-calendar-table table tbody th {
  cursor: pointer;
  background: #fff;
}
</style>
