<template>
  <div>
    <h1>test</h1>

    <Schedule title="资源" :month="month" :rows="rows" @change="onSelectMonth" />

    <!-- <el-calendar ref="dateRef" v-model="date" class="custom-calendar">
      <template #header="{ date }">
        <div class="w-full flex justify-between">
          <span>{{ date }}</span>
          <div class="w-20 flex justify-between">
            <el-icon class="cursor-pointer" @click="selectDate('prev-month')">
              <ArrowLeftBold />
            </el-icon>
            <el-icon class="cursor-pointer" @click="selectDate('next-month')">
              <ArrowRightBold />
            </el-icon>
          </div>
        </div>
      </template>
    </el-calendar> -->
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import Schedule from '@/components/Schedule/index.vue'

const rows = [
  {
    label: 'KJ1',
    value: 'id_kj1'
  },
  {
    label: 'KJ2',
    value: 'id_kj2'
  },
  {
    label: 'KJ3',
    value: 'id_kj3'
  }
]

const month = ref(dayjs().format('YYYY-MM'))

function onSelectMonth(year_month) {
  month.value = year_month
}
</script>

<!-- <style lang="scss" scoped></style> -->
