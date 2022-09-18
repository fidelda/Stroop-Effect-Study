import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('datastore', () => {
  return {uid: ref(), device: ref(), concentration: ref(), ageGroup: ref(), dyslexia:ref(), dyscalculia: ref()}
})
