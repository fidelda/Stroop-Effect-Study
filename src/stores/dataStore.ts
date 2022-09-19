import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('datastore', () => {
  return {uid: ref(), device: ref(), concentration: ref(), age_group: ref(), dyslexia:ref(), dyscalculia: ref()}
})
