<template>
    <main class="main-wrapper">
        <h1 class="page-title">Human Cognition Study</h1>
        <p class="subtitle">Please fill out the form to begin with the study</p>
        <form class="form-wrapper" @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class ="form-field" :class="{'p-error':v$.device.$invalid && submitted}">
                <div class="form-field-content-wrapper">
                    <p class="form-field-text">What is your method of input?*</p>
                    <Dropdown class="form-dropdown" v-model="v$.device.$model"
                    :options="devices" optionLabel="label" optionValue="value" 
                    autoWidth="false" placeholder="Select an input" />
                </div>
            </div>
            <div class="form-field" :class="{'p-error':v$.concentration.$invalid && submitted}">
                <div class="form-field-content-wrapper">
                    <p class="form-field-text">Rate from 1-4 how well this statement applies to you:*</p>
                    <p class="form-field-quote">"I am in a calm environment with enough light and I am able to concentrate."</p>
                    <SelectButton class="form-selectbutton" v-model="v$.concentration.$model" :options="concentrationOptions"
                    optionLabel="name" dataKey="value" aria-labelledby="single"/>
                </div>
            </div>
            <div class="form-field" :class="{'p-error':v$.age_group.$invalid && submitted}">
                <div class="form-field-content-wrapper">
                    <p class="form-field-radiobutton-text">Please select your age group:*</p>
                    <div class="form-field-radiobutton-wrapper">
                        <RadioButton class="form-radiobutton" inputId="group1" name="age_group" value="1" v-model="v$.age_group.$model"/>
                        <label class="radiobutton-text" for="group1">18 - 35</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <RadioButton class="form-radiobutton" inputId="group2" name="age_group" value="2" v-model="v$.age_group.$model"/>
                        <label class="radiobutton-text" for="group2">35 - 55</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <RadioButton class="form-radiobutton" inputId="group3" name="age_group" value="3" v-model="v$.age_group.$model"/>
                        <label class="radiobutton-text" for="group3">55+</label>
                    </div>
                </div>
            </div>
            <div class="form-field" :class="{'p-error':v$.dyslexia.$invalid && submitted}">
                <div class="form-field-content-wrapper">
                    <p class="form-field-radiobutton-text">Do you have dyslexia or any other reading disability?*</p>
                    <div class="form-field-radiobutton-wrapper">
                        <RadioButton class="form-radiobutton" inputId="yes1" name="dyslexia" value="Yes" v-model="v$.dyslexia.$model"/>
                        <label class="radiobutton-text" for="yes1">Yes</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <RadioButton class="form-radiobutton" inputId="no1" name="dyslexia" value="No" v-model="v$.dyslexia.$model"/>
                        <label class="radiobutton-text" for="no1">No</label>
                    </div>
                </div>
            </div>
            <div class="form-field" :class="{'p-error':v$.dyscalculia.$invalid && submitted}">
                <div class="form-field-content-wrapper">
                    <p class="form-field-radiobutton-text">Do you have dyscalculia?*</p>
                    <div class="form-field-radiobutton-wrapper">
                        <RadioButton class="form-radiobutton" inputId="yes2" name="dyscalculia" value="Yes" v-model="v$.dyscalculia.$model"/>
                        <label class="radiobutton-text" for="yes2">Yes</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <RadioButton class="form-radiobutton" inputId="no2" name="dyscalculia" value="No" v-model="v$.dyscalculia.$model"/>
                        <label class="radiobutton-text"  for="no2">No</label>
                    </div>
                </div>
            </div>
            <div class="form-button-wrapper">  
                <Button type="submit" label="Next" class="mt-2"></Button>
            </div>
        </form>
    </main>
  </template>
  
  <script>
  import { useVuelidate } from "@vuelidate/core";
  import { required } from '@vuelidate/validators';
  import { useUserStore } from "@/stores/users";
  import { uuid } from 'vue-uuid';
  
  import Dropdown from 'primevue/dropdown';
  import SelectButton from 'primevue/selectbutton';
  import RadioButton from 'primevue/radiobutton';
  import Button from 'primevue/button';
  
  export default {
    name: 'Form',
    components: {
        Dropdown,
        SelectButton,
        RadioButton,
        Button
    },
    setup: () => ({ v$: useVuelidate(), store: useUserStore() }),
    data() {
        return {
            uid: '',
            device: '',
            devices: [
                {"label": "Mouse", "value": "Mouse"},
                {"label": "Touchscreen", "value": "Touchscreen"},
                {"label": "Pen", "value": "Pen"},
                {"label": "Trackpad", "value": "Trackpad"},
                {"label": "Other", "value": "Other"}
            ],
            concentration: null,
            concentrationOptions: [
                {name: '1: Very bad', value: 1},
                {name: '2: Bad', value: 2},
                {name: '3: Good', value: 3},
                {name: '4: Very good', value: 4}
            ],
            age_group: '',
            dyslexia: '',
            dyscalculia: '',
            study_group: null,
            submitted: false
        }
    },
    validations() {
        return {
            device: {
                required
            },
            concentration: {
                required
            },
            age_group: {
                required
            },
            dyslexia: {
                required
            },
            dyscalculia: {
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
                this.uid = uuid.v4();
                this.study_group = Math.floor(Math.random() * 2) + 1;
                this.storeData();
                this.$router.push("about");
            }
        },
        storeData() {
            this.store.insertFormValues(
                this.uid,
                this.device,
                Number(this.concentration.value),
                Number(this.age_group),
                this.dyslexia == "Yes",
                this.dyscalculia == "Yes",
                this.study_group
            );
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
    min-width: 430px;
    margin: 0 auto;
    text-align: left;
  }
  
  .page-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 34px;
    color: #2d2d2d;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 0px;
  }
  
  .subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: #b1b1b1;    
    margin-top: 5px;
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
  
  .form-field-content-wrapper {
    flex: 1;
  }
  
  .form-dropdown {
    width: 100%;
  }
  
  .form-selectbutton {
    width: 100%;
    margin-top: 18px;
  }
  
  .form-field-quote {
    font-weight: bold;
  }
  
  .form-field-radiobutton-text {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  
  .form-field-radiobutton-wrapper {
    line-height: 100%;
    margin-bottom: 5px;
  }
  
  .radiobutton-text {
    margin-left: 5px;
  }
  
  .form-button-wrapper {
    display: flex;
  }
  
  .form-button-wrapper .mt-2 { 
    width: 100%;
  }
  
  </style>