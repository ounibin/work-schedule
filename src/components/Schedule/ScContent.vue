<template>
  <div class="sc-content">
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th>
            <div class="cell" style="height: 61px">
              <el-date-picker
                v-model="date"
                type="month"
                placeholder="选择月份"
                style="width: 150px; margin: 15px 15px 15px 10px"
                :clearable="false"
                :editable="false"
                @change="onChange"
              ></el-date-picker>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div class="cell">{{ title }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td>
            <div class="cell">{{ row.label }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps({
  title: {
    type: String,
    default: '名称'
  },
  rows: {
    type: Array,
    default: (_) => []
  },
  month: {
    type: String,
    default: ''
  }
})

const date = ref(props.month || dayjs().format('YYYY-MM'))
const emit = defineEmits(['change'])
function onChange() {
  const tmp_date = dayjs(date.value).format('YYYY-MM')
  console.log('ny----日期发生变化', tmp_date)
  emit('change', tmp_date)
}
</script>

<style lang="scss" scoped>
.sc-content {
  width: 200px;
  overflow-x: hidden;
  flex-basis: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.sc-content table {
  width: 100%;
  border-collapse: collapse;
}
.sc-content table th,
.sc-content table td {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-width: 0;
  border-bottom-width: 1px;
  font-size: 0;
}
.sc-content table th > .cell,
.sc-content table td > .cell {
  display: block;
  height: 30px;
  overflow: hidden;
  text-align: left;
  word-break: keep-all;
  text-overflow: ellipsis;
  font-size: 12px;
  padding-left: 1em;
}

.sc-content table thead th .cell,
.sc-content table thead td .cell {
  background: #f3f3f3;
  line-height: 30px;
}

.sc-content table tbody th .cell,
.sc-content table tbody td .cell {
  background: #fff;
  line-height: 30px;
}
</style>
