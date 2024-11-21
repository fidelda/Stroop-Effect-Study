<template>
    <div class="form-view">
        <h3 class="info-text">Please fill out the form</h3>

        <div class="form-wrapper">

            <!-- Input Method -->
            <div class="form-field">
                <div class="form-field-content-wrapper">
                    <p class="form-field-text">What is your method of input?*</p>
                    <select class="form-Select" v-model="surveyData.device">
                        <option value="" :disabled="true">Please choose an option</option>
                        <option v-for="device in devices" :value="device">{{ device }}</option>
                    </select>
                </div>
            </div>

            <!-- Concentration Method -->
            <div class="form-field">
                <div class="form-field-content-wrapper">
                    <p class="form-field-text">Rate from 1-4 how well this statement applies to you:*</p>
                    <p class="form-field-quote">
                        "I am in a calm environment with enough light and I am able to concentrate."
                    </p>
                    <div class="select-button-row">
                        <SelectButton :options="conOptions" v-model="surveyData.concentration_before"></SelectButton>
                    </div>
                </div>
            </div>

            <!-- Age Group -->
            <div class="form-field">
                <div class="form-field-content-wrapper">
                    <p class="form-field-radiobutton-text">Please select your age group:*</p>
                    <div class="form-field-radiobutton-wrapper">
                        <input type="radio" class="form-radiobutton" inputId="group1" name="age_group" value="1"
                            v-model="surveyData.age_group" />
                        <label class="radiobutton-text" for="group1">18 - 35</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <input type="radio" class="form-radiobutton" inputId="group2" name="age_group" value="2"
                            v-model="surveyData.age_group" />
                        <label class="radiobutton-text" for="group2">35 - 55</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <input type="radio" class="form-radiobutton" inputId="group3" name="age_group" value="3"
                            v-model="surveyData.age_group" />
                        <label class="radiobutton-text" for="group3">55+</label>
                    </div>
                </div>
            </div>

            <!-- Dyslexia -->
            <div class="form-field">
                <div class="form-field-content-wrapper">
                    <p class="form-field-radiobutton-text">Do you have dyslexia or any other reading disability?*</p>
                    <div class="form-field-radiobutton-wrapper">
                        <input type="radio" class="form-radiobutton" inputId="yes1" name="dyslexia" value="Yes"
                            v-model="surveyData.dyslexia" />
                        <label class="radiobutton-text" for="yes1">Yes</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <input type="radio" class="form-radiobutton" inputId="no1" name="dyslexia" value="No"
                            v-model="surveyData.dyslexia" />
                        <label class="radiobutton-text" for="no1">No</label>
                    </div>
                </div>
            </div>

            <!-- Dyscalculia -->
            <div class="form-field">
                <div class="form-field-content-wrapper">
                    <p class="form-field-radiobutton-text">Do you have dyscalculia?*</p>
                    <div class="form-field-radiobutton-wrapper">
                        <input type="radio" class="form-radiobutton" inputId="yes2" name="dyscalculia" value="Yes"
                            v-model="surveyData.dyscalculia" />
                        <label class="radiobutton-text" for="yes2">Yes</label>
                    </div>
                    <div class="form-field-radiobutton-wrapper">
                        <input type="radio" class="form-radiobutton" inputId="no2" name="dyscalculia" value="No"
                            v-model="surveyData.dyscalculia" />
                        <label class="radiobutton-text" for="no2">No</label>
                    </div>
                </div>
            </div>

            <div class="form-button-wrapper">
                <button class="mt-2" :disabled="!isFormValid()" @click="submitForm()">Next</button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserDataStore } from "@/store";
import { ref } from "vue";
import SelectButton from "@/components/SelectButton.vue";
import router from "@/router";
import { emptySurveyData } from "@/interface";

const store = useUserDataStore();
const surveyData = ref({ ...emptySurveyData });

const devices = ["Mouse", "Touchscreen", "Pen", "Trackpad", "Other"];
const conOptions = ["1: Very bad", "2: Bad", "3: Good", "4: Very Good"]

const isFormValid = (): boolean => {
    return surveyData.value.device != ""
        && surveyData.value.concentration_before >= 0
        && surveyData.value.age_group >= 0
        && surveyData.value.dyslexia != null
        && surveyData.value.dyscalculia != null
}

const submitForm = () => {
    store.updateSurveyData(surveyData.value);
    router.push('/instructions');
}
</script>

<style scoped>
input[type="radio"] {
    cursor: pointer;
}

.form-view {
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
}

.info-text {
    text-align: center;
}

.form-wrapper {
    text-align: left;
}


.form-field {
    border: 1px solid #f6f6f6;
    box-shadow: 2px 2px 8px 0 #cfcfcf;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 1.25rem;
    margin-bottom: 16px;
}

.form-field p:first-child {
    margin-top: 0;
}

.form-field-content-wrapper {
    flex: 1;
}

.form-Select {
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