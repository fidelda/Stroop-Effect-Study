<template>
  <main class="main-wrapper">
    <form @submit.prevent="handleSubmit(!v$.$invalid)">
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
          You volunteer to participate in this study. By clicking on the "Accept"-button at the bottom of the page, you give your consent to use your answers in this study about human cognition. Your input is stored anonymously, therefore it is not possible to delete your data after you complete the experiment. The data collected is not personal data as you, as a participant, cannot be identified directly or indirectly.
          You can cancel your participation at any point during the experiment. No data will be stored until you reach the end of the experiment.
          You must be at least 18 years of age to participate in this study. <br> <br>
          You will be asked some questions. Then you are shown an introduction including an example of the experiment. After the experiment you are asked to answer another short question.
          The experiment is designed to be completed in less than X minutes.
        </p>
        <div class="terms-checkbox-wrapper">
            <Checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
            <label for="accept" class="checkbox-label" :class="{'p-error': v$.accept.$invalid && submitted}">I agree to the terms and conditions*</label>
        </div>
      </div>
      <div class="button-wrapper">
        <Button type="submit" label="Accept" class="mt-2"></Button>
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
    name: 'About',
    components: {
      Button,
      Checkbox
    },
    setup: () => ({ v$: useVuelidate() }),
    data() {
      return {
        accept: null,
        submitted: false
      }
    },
    validations() {
        return {
          accept: {
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
          this.$router.push("instructions");
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
