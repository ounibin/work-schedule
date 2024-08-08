<template>
  <div>
    <!-- <Schedule title="资源" :month="month" :rows="rows" @change="onSelectMonth" /> -->

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
              <th class="">
                <div class="col-hr"></div>
              </th>
              <th v-for="(day, index) in days" :key="index" class="">
                <div class="cell">{{ day }}</div>
              </th>
            </tr>
            <tr>
              <th>
                <div class="col-hr"></div>
              </th>
              <th v-for="(day, index) in days" :key="index" class="{`${weekEnd}`}">
                <div class="cell">五</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hrItem, hrIndex) in people_list" :key="hrItem.value">
              <td>
                <div class="col-hr">{{ hrItem.name }}</div>
              </td>
              <td
                v-for="(task, index) in hrItem.tasks"
                :key="index"
                class="{`${weekEnd}`}"
                @click="onClickRow($event, task, index)"
              >
                <div :class="['cell', '']">{{ task.color }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { HR_list, tasks } from '@/mock/data'
import Schedule from '@/components/Schedule/index.vue'

const days = (() => {
  const day_list = []
  for (let index = 1; index <= 30; index++) {
    day_list.push(index)
  }
  return day_list
})()

// const days_tasks =

const month = ref(dayjs().format('YYYY-MM'))

const monthStr = computed(() => {
  return '2024-08'
})

// 组件挂载完成后调用
onMounted(() => {
  init()
})

const people_list = ref([])
function init() {
  people_list.value = HR_list.map((item) => {
    return {
      ...item,
      tasks: getPeopleSchedule(item.id)
    }
  })
  return people_list
}

function getPeopleTasks(people_id: string) {
  const all_tasks = tasks.filter((item) => {
    return item.belongs_to.includes(people_id)
  })
  return all_tasks
}

function getPeopleSchedule(people_id: string) {
  const list = days.map((day) => ({}))
  const tasks = getPeopleTasks(people_id)
  let pre_task_index = 0
  tasks.forEach((task, task_index) => {
    const color_list = ['red', 'blue']
    const duration = task.duration || []
    let color_index = 0
    if (task_index !== pre_task_index) {
      color_index = color_index + 1
      pre_task_index = task_index
    }
    duration.forEach((duration_item) => {
      list[duration_item] = {
        name: task.name,
        color: color_list[color_index]
      }
    })
  })
  return list
}

const bgc = ref('')
function onClickRow(e: MouseEvent, day: any, index: any) {
  const { classList } = e.target
  classList.contains('red') ? classList.remove('red') : classList.add('red')
}

function prevMonth() {}

function nextMonth() {}
</script>

<style lang="scss" scoped>
.sc-calendar {
  position: relative;
  .col-hr {
    padding: 10px;
  }
}
.sc-calendar-header {
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
  // table-layout: fixed;
  min-width: 840px;
  border-collapse: collapse;
  margin: 0 auto;
}

.sc-calendar-table td,
.sc-calendar-table th {
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s ease;
  overflow: hidden;
  max-height: 30px;
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
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  &.red {
    background-color: red;
    color: white;
  }
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
  color: #606266;
  background: #fff;
}
</style>
