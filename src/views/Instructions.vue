<template>
  <main class="main-wrapper">
    <div class="instructions-wrapper">
      <h1>Instructions</h1>
      <p>
        The goal for you as a participant is to answer the following tasks as quickly and correctly as possible.
        Your reaction time and accuracy will be measured. The experiment contains 32 trials. <br>
        You have to choose between two pictures consisting of either letters or numbers. The numbers are represented
        to you either as digits or as words, depending on the study group. Your group will be randomly selected during
        the experiment.
        For each test, click the image that you think contains the most items. Below is an example of each type of
        study.
        The correct answer is outlined.
      </p>
    </div>
    <div class="image-wrapper">
      <img src="@/assets/examples/examples.jpg" class="example-image">
    </div>
    <div class="multiple-checkbox-wrapper">
      <div class="checkbox-wrapper">
        <Checkbox v-model="acceptRead">I can read the examples* </Checkbox>
      </div>
      <div class="checkbox-wrapper">
        <Checkbox v-model="acceptUnderstand">I understand what to do and want to continue*</Checkbox>
      </div>
    </div>
    <div class="button-wrapper">
      <button :disabled="!acceptRead || !acceptUnderstand" class="mt-2" @click="router.push('/trials')">Start</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox.vue'
import router from '@/router';

const acceptRead = ref<boolean>();
const acceptUnderstand = ref<boolean>();
</script>

<style scoped>
p {
  font-size: 16px;
  margin-top: 8px;
}

.main-wrapper {
  max-width: 610px;
  margin: 16px auto;
  text-align: justify;
  padding-left: 5px;
  padding-right: 5px;
}

.main-wrapper h1 {
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

.instructions-wrapper {
  margin-bottom: 24px;
  text-align: justify;
}

.multiple-checkbox-wrapper {
  text-align: left;
  margin-bottom: 24px;
}

.checkbox-wrapper {
  line-height: 100%;
  margin-bottom: 1rem;
}

.checkbox-label {
  margin-left: 6px;
}

.image-wrapper {
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  min-width: 250px;
  min-height: 280px;
  max-height: 350px;
}

.example-image {
  max-width: 450px;
  min-width: 250px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px 0 #cfcfcf;
}
</style>