import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import questionsData from "../static/questions_data.json"

import api from '../api/index'

interface Question {
  id: number,
  word: string,
  sequence: string,
  options: string[],
  answer: string  
}

const questionsData = ref<Question[]>([])
for (let i = 0; i < 20; i++) {
  api.question.getQuestion().then((res) => {
    questionsData.value.push(res.data)
  })
}

export const useTestInfoStore = defineStore('testInfo', () => {
  const wordAmount = ref(5)
  const answeredAmount = ref(0)
  const totalFailed = ref(0)
  const totalAgreed = ref(0)
  const questionIndex = ref(0)
  const choosedOption = ref<string | null>(null)

  const testIsStart = ref(false)
  const testIsStop = ref(false)

  const currentQuestion = computed(() => questionsData.value[questionIndex.value])
  const progress = computed(() => {
    return Math.round((answeredAmount.value / wordAmount.value) * 100)
  })
  const accuracy = computed(() => {
    console.log(accuracy)
    return Math.round(((wordAmount.value - totalFailed.value) / wordAmount.value) * 100)
  })

  return {
    wordAmount,
    answeredAmount,
    totalFailed,
    totalAgreed,
    questionIndex,
    choosedOption,
    testIsStart,
    testIsStop,
    currentQuestion,
    progress,
    accuracy
  }
})
