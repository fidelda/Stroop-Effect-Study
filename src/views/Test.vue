
<template>
    <div class="form-demo">

        <div class="flex justify-content-center">
            <div class="card">
                <h5 class="text-center">Please fill out this form.</h5>
                <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="first_name" v-model="v$.first_name.$model" :class="{'p-invalid':v$.first_name.$invalid && submitted}" />
                            <label for="first_name" :class="{'p-error':v$.first_name.$invalid && submitted}">First Name*</label>
                        </div>
                        <small v-if="(v$.first_name.$invalid && submitted) || v$.first_name.$pending.$response" class="p-error">{{v$.first_name.required.$message.replace('Value', 'First Name')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="last_name" v-model="v$.last_name.$model" :class="{'p-invalid':v$.last_name.$invalid && submitted}" />
                            <label for="last_name" :class="{'p-error':v$.last_name.$invalid && submitted}">Last Name*</label>
                        </div>
                        <small v-if="(v$.last_name.$invalid && submitted) || v$.last_name.$pending.$response" class="p-error">{{v$.last_name.required.$message.replace('Value', 'Last Name')}}</small>
                    </div>
                    <div class="field" id="email-field">
                        <div class="p-float-label p-input-icon-right">
                            <InputText id="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" aria-describedby="email-error"/>
                            <label for="email" :class="{'p-error':v$.email.$invalid && submitted}">Email*</label>
                        </div>
                        <span v-if="v$.email.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                            <small class="p-error">{{error.$message}}</small>
                            </span>
                        </span>
                        <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{v$.email.required.$message.replace('Value', 'Email')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <Calendar id="date" v-model="date" :showIcon="true" />
                            <label for="date">Birthday</label>
                        </div>
                    </div>
                    <div class = "field">
                        <h4>Do you have Dyslexia?*</h4>
                        <div class="field-radiobutton">
                            <RadioButton inputId="yes1" name="dyslexia" value="Yes" v-model="dyslexia" />
                            <label for="yes1">Yes</label>
                        </div>
                        <div class="field-radiobutton">
                            <RadioButton inputId="no1" name="dyslexia" value="No" v-model="dyslexia" />
                            <label for="no1">No</label>
                        </div>
                    </div>
                    <div class="field-checkbox">
                        <Checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
                        <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">I agree to the terms and conditions*</label>
                    </div>
                    <Button type="submit" label="Submit" class="mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { db } from '@/database/db'
import { uuid } from 'vue-uuid'; 

export default {
    setup () {
        const state = reactive({
            first_name: '',
            last_name: '',
            email: '',
            date: null,
            dyslexia: null,
            accept: null
        });

        const rules = {
            first_name: { required },
            last_name: { required },
            email: { required, email },
            dyslexia: { required },
            accept: { required }
        };

        const submitted = ref(false);
        const showMessage = ref(false);
        const date = ref();
        const dyslexia = ref();

        const v$ = useVuelidate(rules, state);

        const handleSubmit = (isFormValid) => {
            this.submitted = true;

            if (!isFormValid) {
                return;
            } else {
                console.log(uuid.v4());
                /*db.ref('users/' + uuid.v4()).set({
                    first_name : this.first_name,
                    last_name : this.last_name
                });*/
            }
        }

        return { state, v$, handleSubmit, submitted, showMessage, date }
    }
}
</script>


<style lang="scss" scoped>
    .form-demo {
        .card {
            min-width: 450px;
            
            label {
                margin-left: 0.2rem;
            }
            
            line-height: 100%;
    
            form {
                margin-top: 2rem;
            }
    
            .field {
                margin-bottom: 1.5rem;
            }

            .field-checkbox {
                margin-bottom: 1.5rem;
            }

            .field-radiobutton{
                margin-top: 0.5rem;
                padding-right: 1rem;
            }
        }
    
        @media screen and (max-width: 960px) {
            .card {
                width: 80%;
            }
        }
    }
    
</style>
