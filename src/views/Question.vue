<template>
  <main class="main-wrapper">
    <h3 class="info-text">Please answer one last question before submitting your results</h3>
    <!-- Concentration Method -->
    <div class="form-field">
      <div class="form-field-content-wrapper">
        <p class="form-field-text">Rate from 1-4 how well this statement applies to you:*</p>
        <p class="form-field-quote">
          "During the experiment I was in a calm environment with enough light and I was
          able to concentrate."
        </p>
        <div class="select-button-row">
          <SelectButton :options="conOptions" v-model="surveyData.concentration_after"></SelectButton>
        </div>
      </div>
    </div>
    <div class="form-button-wrapper">
      <button :disabled="!isFormValid()" type="submit" class="mt-2" @click="onSubmit">Submit</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import SelectButton from '@/components/SelectButton.vue'
import router from "@/router";
import { useUserDataStore } from '@/store';
import { ref } from 'vue';

const store = useUserDataStore();
const surveyData = ref({ ...store.getSurveyData() });

const conOptions = ["1: Very bad", "2: Bad", "3: Good", "4: Very Good"];

const isFormValid = () => {
  return surveyData.value.concentration_after >= 0;
}

const onSubmit = () => {
  store.updateSurveyData(surveyData.value);
  store.finishStudy();
  router.push('endscreen');
}
</script>

<style scoped>
.main-wrapper {
  max-width: 600px;
  margin: 0 auto;
  display: block;
}

.info-text {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}

.form-wrapper {
  text-align: left;
  width: 100%
}

.form-field {
  border: 1px solid #f6f6f6;
  box-shadow: 2px 2px 8px 0 #cfcfcf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
}

.form-selectbutton {
  width: 100%;
  margin-top: 18px;
}

.form-field-content-wrapper {
  display: block;
}

.form-selectbutton {
  width: 100%;
  margin-top: 18px;
  flex: 1 0 auto;
}

.form-field-quote {
  font-weight: bold;
}

.form-button-wrapper {
  display: flex;
}

.form-button-wrapper .mt-2 {
  width: 100%;
}
</style>