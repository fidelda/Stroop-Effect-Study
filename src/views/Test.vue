
<template>
    <div class="form-demo">
        <div class="flex justify-content-center">
            <div class="card">
                <h3 class="text-center">Please fill out the form to begin with the study.</h3>
                <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
                    <div class = "field">
                        <h4 :class="{'p-error':v$.device.$invalid && submitted}">What is your method of input?</h4>
                        <Dropdown v-model="v$.device.$model" :class="{'p-invalid':v$.device.$invalid && submitted}" :options="devices" optionLabel="label" optionValue="value" placeholder="Select an input" />
                    </div>
                    <div class = "field">
                        <h4 :class="{'p-error':v$.concentration.$invalid && submitted}">
                            Rate how well this statement applies from 1-4: <br>
                            "I am in a calm environment with enough light and I am able to concentrate."
                        </h4>
                        <Slider v-model="v$.concentration.$model" :class="{'p-invalid':v$.concentration.$invalid && submitted}" id= "concentration-slider" :min="1" :max="4" />
                        <h4 id="concentration-text" :class="{'p-error':v$.concentration.$invalid && submitted}">Rating: {{numToStatement(concentration)}} </h4>
                    </div>
                    <div class = "field">
                        <h4 :class="{'p-error':v$.ageGroup.$invalid && submitted}">Please select your age group:</h4>
                        <div class="field-radiobutton">
                            <RadioButton inputId="group1" name="ageGroup" value='1' v-model="v$.ageGroup.$model" :class="{'p-invalid':v$.ageGroup.$invalid && submitted}" />
                            <label for="group1" :class="{'p-error':v$.ageGroup.$invalid && submitted}">0-17 years</label>
                        </div>
                        <div class="field-radiobutton">
                            <RadioButton inputId="group2" name="ageGroup" value='2' v-model="v$.ageGroup.$model" :class="{'p-invalid':v$.ageGroup.$invalid && submitted}" />
                            <label for="group2" :class="{'p-error':v$.ageGroup.$invalid && submitted}">18-23 years</label>
                        </div>
                    </div>
                    <div class = "field">
                        <h4 :class="{'p-error':v$.dyslexia.$invalid && submitted}">Do you have dyslexia or any other reading disability?</h4>
                        <div class="field-radiobutton">
                            <RadioButton inputId="yes1" name="dyslexia" value="Yes"  v-model="v$.dyslexia.$model" :class="{'p-invalid':v$.dyslexia.$invalid && submitted}" />
                            <label for="yes1" :class="{'p-error':v$.dyslexia.$invalid && submitted}">Yes</label>
                        </div>
                        <div class="field-radiobutton">
                            <RadioButton inputId="no1" name="dyslexia" value="No" v-model="v$.dyslexia.$model" :class="{'p-invalid':v$.dyslexia.$invalid && submitted}" />
                            <label for="no1" :class="{'p-error':v$.dyslexia.$invalid && submitted}">No</label>
                        </div>
                    </div>
                    <div class = "field">
                        <h4 :class="{'p-error':v$.dyscalculia.$invalid && submitted}">Do you have dyscalculia?</h4>
                        <div class="field-radiobutton">
                            <RadioButton inputId="yes2" name="dyscalculia" value="Yes" v-model="v$.dyscalculia.$model" :class="{'p-invalid':v$.dyscalculia.$invalid && submitted}"/>
                            <label for="yes2" :class="{'p-error':v$.dyscalculia.$invalid && submitted}">Yes</label>
                        </div>
                        <div class="field-radiobutton">
                            <RadioButton inputId="no2" name="dyscalculia" value="No" v-model="v$.dyscalculia.$model" :class="{'p-invalid':v$.dyscalculia.$invalid && submitted}" />
                            <label for="no2" :class="{'p-error':v$.dyscalculia.$invalid && submitted}">No</label>
                        </div>
                    </div>
                    <div class="field-checkbox">
                        <Checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
                        <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">I agree to the terms and conditions</label>
                    </div>
                    <Button type="submit" label="Submit" class="mt-2"></Button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from '@vuelidate/validators';
import { useDataStore } from "@/stores/dataStore"
import { uploadToDatabase } from "@/database/db"

export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            uid: '',
            device: '',
            concentration: null,
            ageGroup: '',
            dyslexia: null,
            dyscalculia: null,
            accept: null,
            submitted: false,
            devices: [
                {"label": "Mouse", "value": "Mouse"},
                {"label": "Touchscreen", "value": "Touchscreen"},
                {"label": "Pen", "value": "Pen"},
                {"label": "Trackpad", "value": "Trackpad"},
                {"label": "Other", "value": "Other"}
            ],
            numToStatement: (x) => (
                x == 1 ? 'Very Bad (1)' : 
                x == 2 ? 'Bad (2)' :
                x == 3 ? 'Good (3)' : 
                x == 4 ? 'Very Good (4)' : 
                ' ' 
            )
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
            ageGroup: {
                required
            },
            dyslexia: {
                required
            },
            dyscalculia: {
                required
            },
            accept: {
                required
            }
        }
    },
    created() {
        this.uid = this.gen_uid();
        console.log(this.uid);
    },
    mounted() {
        
    },
    methods: {
        handleSubmit(isFormValid) {
            this.submitted = true;
            if (!isFormValid) {
                return;
            } else {
                this.storeData();
                this.$router.push("about");
            }
        },
        storeData() {
            const store = useDataStore();
            store.uid = this.uid;
            store.device = this.device;
            store.concentration = this.concentration;
            store.ageGroup = Number(this.ageGroup);
            store.dyslexia = this.dyslexia == 'Yes' ? true : false;
            store.dyscalculia = this.dyscalculia == 'Yes' ? true : false;
            uploadToDatabase();
        },
        gen_uid() {
            /*
            https://pixelprivacy.com/resources/browser-fingerprinting/
            https://en.wikipedia.org/wiki/Device_fingerprint
            */
            var navigator_info = window.navigator;
            var screen_info = window.screen;
            var uid = navigator_info.mimeTypes.length;
            uid += navigator_info.userAgent.replace(/\D+/g, '');
            uid += navigator_info.plugins.length;
            uid += screen_info.height || '';
            uid += screen_info.width || '';
            uid += screen_info.pixelDepth || '';
            return uid;
        }
    }
}
</script>


<style lang="scss" scoped>
    .form-demo {
        .card {
            min-width: 450px;
            max-height: 800px;
            
            label {
                margin-left: 0.2rem;
            }
            
            line-height: 100%;
    
            form {
                margin-top: 2rem;
            }

            h4 {
                margin-bottom: 0.5rem;
                br {
                    margin-bottom: 0.25rem;
                }
            }
    
            .field {
                margin-bottom: 2rem;
            }

            #concentration-slider {
                margin-top: 1rem;
                margin-bottom: 0.5rem;
            }

            .field-checkbox {
                margin-bottom: 1.5rem;
            }

            .field-radiobutton{
                margin-top: 0.5rem;
                padding-right: 1rem;
            }

            #concentration-text {
                margin-bottom: 2rem;
                color: #312E81
            }
        }
    
        @media screen and (max-width: 960px) {
            .card {
                width: 80%;
            }
        }

        .text-center {
            margin-top: 2rem;
        }
    }
    
</style>
