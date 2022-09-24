<template>
    <main class="main-wrapper">
        <h3 class="info-text">Please answer one last question before submitting your results</h3>
        <form class="form-wrapper" @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class="form-field" :class="{'p-error':v$.concentration.$invalid && submitted}">
                <div class="form-field-content-wrapper">
                    <p class="form-field-text">Rate from 1-4 how well this statement applied to you during the experiment:*</p>
                    <p class="form-field-quote">"During the experiment I was in a calm environment with enough light and I was able to concentrate."</p>
                    <SelectButton class="form-selectbutton" v-model="v$.concentration.$model" :options="concentrationOptions"
                    optionLabel="name" dataKey="value" aria-labelledby="single"/>
                </div>
            </div>
            <div class="form-button-wrapper">  
                <Button type="submit" label="Submit" class="mt-2"></Button>
            </div>
        </form>
    </main>
  </template>
  
  <script>
  import { useVuelidate } from "@vuelidate/core";
  import { required } from '@vuelidate/validators';
  import { useUserStore } from "@/stores/users";
  import { writeUserDataFromStore } from "@/database/db";
  
  import SelectButton from 'primevue/selectbutton';
  import Button from 'primevue/button';
  
  export default {
    name: 'Question',
    components: {
        SelectButton,
        Button
    },
    setup: () => ({ v$: useVuelidate(), store: useUserStore() }),
    data() {
        return {
            concentration: null,
            concentrationOptions: [
                {name: '1: Very bad', value: 1},
                {name: '2: Bad', value: 2},
                {name: '3: Good', value: 3},
                {name: '4: Very good', value: 4}
            ],
            submitted: false
        }
    },
    validations() {
        return {
            concentration: {
                required
            }
        }
    },
    beforeMount() {
        window.addEventListener("beforeunload", this.preventNav);
      },
    methods: {
        handleSubmit(isFormValid) {
            this.submitted = true;
            if (!isFormValid) {
                return;
            } else {
                this.storeData();
                writeUserDataFromStore();
                this.$router.push("endscreen");
            }
        },
        storeData() {
            this.store.insertConcentrationAfter(Number(this.concentration.value));
        },
        preventNav(event) {
          if(this.allowLeave) { return };
          event.preventDefault();
          // Chrome requires returnValue to be set.
          event.returnValue = "";
        }
    }
  }
  </script>
  
  <style scoped>
  
  html {
    background-color: #fbfbfb;
  }
    
  .main-wrapper {
    max-width: 600px;
    margin: 0 auto;
    display: block;
  }

  .info-text {
    font-family:'Source Sans Pro', sans-serif;
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