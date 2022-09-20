import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    uid: '',
    device: '',
    concentration: 0,
    age_group: 0,
    dyslexia: false,
    dyscalculia: false
  });

  const insertFormValues = (f_uid:string, f_device:string, f_conentration:number, f_age_group:number, f_dyslexia:boolean, f_dyscalculia:boolean) => {
    user.value.uid = f_uid;
    user.value.device = f_device;
    user.value.concentration = f_conentration;
    user.value.age_group = f_age_group;
    user.value.dyslexia = f_dyslexia;
    user.value.dyscalculia = f_dyscalculia;
  };

  return {
    user,
    insertFormValues
  }
});