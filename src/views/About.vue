<template>
  <div class="about-wrapper">
    <div class="about-text-wrapper">
      <h1>Welcome</h1>
      <p class="about-text">
        Thank you for participating in our study project! This experiment is conducted as a part of the
        course Human Cognition in Human-Computer Interaction at Stockholm Universitet.
      </p>
    </div>
    <div class="terms-wrapper">
      <h1>Terms and Conditions</h1>
      <p>
        You volunteer to participate in this study. By clicking on the "Accept"-button at the bottom of the page, you
        give your consent to use your answers in this study about human cognition. Your input is stored anonymously,
        therefore it is not possible to delete your data after you complete the experiment. The data collected is not
        personal data as you, as a participant, cannot be identified directly or indirectly.
        You can cancel your participation at any point during the experiment. No data will be stored until you reach
        the end of the experiment.
        You must be at least 18 years of age to participate in this study.
        <br>
        You will be asked some questions. Then you are shown an introduction including an example of the experiment.
        After the experiment you are asked to answer another short question.
        The experiment is designed to be completed in less than 5 minutes.
      </p>
      <div class="terms-checkbox-wrapper">
        <Checkbox v-model="accept">I agree to the terms and conditions*</Checkbox>
      </div>
    </div>
    <div class="button-wrapper">
      <button :disabled="!accept" @click="router.push('/form')">Accept</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "@/components/Checkbox.vue";
import router from "@/router";
import { ref } from "vue";

const accept = ref(false);
</script>

<style scoped>
html {
  background-color: #fbfbfb;
}

html p {
  font-size: 16px;
  margin-top: 8px;
}

.about-wrapper {
  max-width: 610px;
  margin: 16px auto;
  text-align: justify;
  padding-left: 5px;
  padding-right: 5px;
}

.about-wrapper h1 {
  margin: 0;
}

.button-wrapper {
  display: flex;
  flex: 1;
  justify-content: center;
}

.mt-2 {
  font-size: 16px;
  width: 100%;
}

.terms-wrapper {
  margin-top: 20px;
  margin-bottom: 32px;
}

.terms-checkbox-wrapper {
  margin-top: 24px;
  line-height: 100%;
}

.checkbox-label {
  margin-left: 6px;
}
</style>
