<template>
    <div class="select-button-row">
        <div v-for="(option, index) in options" @click="selectButton(index)" class="select-button" :disabled="disabled"
            :class="{ 'selected': selectedButton == index }">
            {{ option }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const { modelValue, disabled } = defineProps({
    modelValue: {
        type: Number,
        default: -1,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    options: {
        type: Array as () => String[],
        default: [],
    }
});

const emit = defineEmits(['update:modelValue', 'valueUpdated']);

const selectedButton = ref(-1);
const localValue = ref(modelValue);

const selectButton = (buttonValue: number) => {
    selectedButton.value = buttonValue;
    localValue.value = buttonValue
}

// Watch for changes in localValue and emit the update event
watch(() => localValue.value, (newValue) => {
    emit('update:modelValue', newValue);
    emit('valueUpdated');
});
</script>

<style scoped>
.select-button-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 0.5rem;
    box-shadow: 0.5px 0.5px 4px 0 #e1e1e1;
}

.select-button {
    width: 100%;
    background-color: white;
    border-top: 1px solid #adaeaf;
    border-bottom: 1px solid #adaeaf;
    border-left: 1px solid #adaeaf;
    padding: 0.5rem;
    transition: 500ms;
    user-select: none;
}

.select-button.selected {
    background-color: #437cd9;
    border-color: #2b60b4;
    color: white;
}

.select-button.selected:hover {
    cursor: default;
    background-color: #437cd9;
}

.select-button:hover {
    cursor: pointer;
    background-color: #f6f6f6;
}

.select-button:first-child {
    border-radius: 0.5rem 0rem 0rem 0.5em;
}

.select-button:last-child {
    border-radius: 0rem 0.5rem 0.5rem 0em;
    border-right: 1px solid #adaeaf;
}
</style>