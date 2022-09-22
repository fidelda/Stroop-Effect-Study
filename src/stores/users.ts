import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    uid: '',
    device: '',
    concentration_before: 0,
    concentration_after: 0,
    age_group: 0,
    dyslexia: false,
    dyscalculia: false,
    study_group: 0,
    trials: new Map()
  });

  const insertFormValues = (
    f_uid:string,
    f_device:string,
    f_conentration_before:number, 
    f_age_group:number,
    f_dyslexia:boolean, 
    f_dyscalculia:boolean,
    f_study_group:number) => {

      user.value.uid = f_uid;
      user.value.device = f_device;
      user.value.concentration_before = f_conentration_before;
      user.value.age_group = f_age_group;
      user.value.dyslexia = f_dyslexia;
      user.value.dyscalculia = f_dyscalculia;
      user.value.study_group = f_study_group
  };

  const insertConcentrationAfter = (f_concentration_after:number) => {
    user.value.concentration_after = f_concentration_after;
  };

  const insertTrialData = (id:number, trialdata:any) => {
    user.value.trials.set(id, trialdata);
  }

  const getTrialDataById = (id:number) => {
    return user.value.trials.get(id);
  }

  return {
    user,
    insertFormValues,
    insertTrialData,
    insertConcentrationAfter,
    getTrialDataById
  }
});