import { reactive, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { initUserData, type SurveyData, type TrialData } from '@/interface';
import { uuid } from 'vue-uuid';
import { uploadUserData } from '@/database';

export const useUserDataStore = defineStore('user-data-store', () => {
  // User Data
  const storedUserData = sessionStorage.getItem('user-data');
  const userData = ref(storedUserData ? JSON.parse(storedUserData) : {...initUserData});

  // User Id
  let userId: string;
  const storedId = sessionStorage.getItem('user-id');
  if (storedId) {
    userId = storedId;
  } else {
    userId = uuid.v4();
    sessionStorage.setItem('user-id', userId);
  }

  // Getter Functions
  const getUserData = () => { return userData.value };
  const getUserId = () => { return userId };
  const getStudyGroup = () => { return getUserData().study_group};
  const getSurveyData = () => { return getUserData().survey_data };

  const hasParticipated = () => { return (getUserData().finished || getUserData().aborted) };

  const updateSurveyData = (surveyData: SurveyData) => {
    userData.value.survey_data = surveyData;
    sessionStorage.setItem('user-data', JSON.stringify(getUserData()));
  };

  const insertTrialData = (trialData: TrialData) => {
    userData.value.trials.push(trialData);
  }

  const abortStudy = () => {
    userData.value.aborted = true;
    uploadUserData(userId, getUserData());
  }

  const finishStudy = () => {
    userData.value.finished = true;
    uploadUserData(userId, getUserData());
  }

  return {
    getUserData, getUserId, getStudyGroup, getSurveyData,
    hasParticipated,
    updateSurveyData, insertTrialData,
    abortStudy, finishStudy
  }
});