<template>
    <main class="main-wrapper">
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="instructions-wrapper">
          <h1>Instructions</h1>
          <p>
            The goal for you as a participant is to answer the following tasks as quickly and correctly as possible.
            Your reaction time and accuracy will be measured. The experiment contains 32 trials. <br> <br>
            You have to choose between two pictures consisting of either letters or numbers. The numbers are represented
            to you either as digits or as words, depending on the study group. Your group will be randomly selected during the experiment. 
            For each test, click the image that you think contains the most items. Below is an example of each type of study. 
            The correct answer is outlined.
          </p>
        </div>
        <div class="image-wrapper">
              <img src="@/assets/examples/examples.jpg" class="example-image">
            </div>
        <div class="multiple-checkbox-wrapper">
            <div class="checkbox-wrapper">
                <Checkbox id="read_accept" name="read_accept" value="Read_accept" v-model="v$.read_accept.$model" :class="{'p-invalid':v$.read_accept.$invalid && submitted}" />
                <label for="read_accept" class="checkbox-label" :class="{'p-error': v$.read_accept.$invalid && submitted}">I can read the examples*</label>
            </div>
            <div class="checkbox-wrapper">
                <Checkbox id="understand_accept" name="understand_accept" value="Understand_accept" v-model="v$.understand_accept.$model" :class="{'p-invalid':v$.understand_accept.$invalid && submitted}" />
                <label for="understand_accept" class="checkbox-label" :class="{'p-error': v$.understand_accept.$invalid && submitted}">I understand what to do and want to continue*</label>
            </div>
        </div>
        <div class="button-wrapper">
          <Button type="submit" label="Start" class="mt-2"></Button>
        </div>
      </form>
    </main>
  </template>
  
  <script>
    import { useVuelidate } from "@vuelidate/core";
    import { required } from '@vuelidate/validators';
  
    import Button from 'primevue/button'
    import Checkbox from 'primevue/checkbox'
  
    export default {
      name: 'Instructions',
      components: {
        Button,
        Checkbox
      },
      setup: () => ({ v$: useVuelidate()}),
      data() {
        return {
          read_accept: null,
          understand_accept: null,
          submitted: false
        }
      },
      validations() {
          return {
            read_accept: {
              required
            },
            understand_accept: {
                required
            }
          }
      },
      methods: {
        handleSubmit(isFormValid) {
          this.submitted = true;
          if (!isFormValid) {
            return;
          } else {
            this.$router.push("trials");
          }
        }
      }
    }
  </script>
  
  <style>
    html {
      background-color: #fbfbfb;
    }
  
    html p {
        font-size: 18px;
        margin-top: 16px;
    }
    
    .main-wrapper {
        max-width: 600px;
        margin: 16px auto;
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
      text-align:justify;
    }

    .multiple-checkbox-wrapper {
        margin-bottom: 24px;
    }
  
    .checkbox-wrapper {
      line-height: 100%;
      margin-bottom: 8px;
    }
  
    .checkbox-label {
      margin-left: 6px;
    }

    .image-wrapper {
      display: flex;
      flex: 1;
      justify-content: center;
      margin-top: 0px;
      margin-bottom: 24px;
      padding-left: 25px;
      padding-right: 25px;
    }

    .example-image {
      max-width: 450px;
      min-width: 150px;
      border-radius: 12px;
      box-shadow: 2px 2px 8px 0 #cfcfcf; 
    }
  
  </style>
  