<template>
    <main id="trial-main-wrapper" class="main-wrapper" @mousemove="enableHover" @touchstart="disableHover">
        <div class="card">
            <div class="flex flex-wrap card-container justify-content-center" style="max-width: 700px;">
                <div class="image-box">
                    <img :src="`${images[index].first}`" class="study-image" @click="handleClick(1)">
                </div>
                <div class="image-box">
                    <img :src="`${images[index].second}`" class="study-image" @click="handleClick(2)">
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useUserDataStore } from "@/store";
import { ref, onMounted, type Ref } from 'vue';
import type { SvgImage, TrialData } from "@/interface";
import router from "@/router";

import letters from "@/assets/image_arrays/letters";
import digits from "@/assets/image_arrays/digits";
import words from "@/assets/image_arrays/words"

// Initialize store
const store = useUserDataStore();

// Reactive state variables
const start_timestamp = ref<number>(Date.now());
const index = ref(0);
const last_touch_time = ref(0);

const images: Ref<SvgImage[]> = ref(letters);

if (store.getStudyGroup() == 1) {
    images.value.push(...digits);
} else {
    images.value.push(...words);
}

onMounted(() => {
    start_timestamp.value = Date.now();
});


// Methods
const handleClick = (clicked_img: number) => {
    const time = Date.now() - start_timestamp.value;
    const correct_img = images.value[index.value].correct_img;

    const newTrialData = {
        correct_img: correct_img,
        clicked_img: clicked_img,
        is_user_right: clicked_img === correct_img,
        time: time
    } as TrialData

    store.insertTrialData(newTrialData);

    if (index.value < images.value.length - 1) {
        start_timestamp.value = Date.now();
        index.value++;
    } else {
        router.push("question");
    }
};

const enableHover = () => {
    if (new Date().getTime() - last_touch_time.value < 500) {
        return;
    }
    document.getElementById("trial-main-wrapper")?.classList.remove('hasTouch');
    document.getElementById("trial-main-wrapper")?.classList.add('hasHover');
};

const disableHover = () => {
    last_touch_time.value = new Date().getTime();
    document.getElementById("trial-main-wrapper")?.classList.remove('hasHover');
    document.getElementById("trial-main-wrapper")?.classList.add('hasTouch');
};
</script>


<style scoped>
.main-wrapper {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    min-width: 200px;
    min-height: 100px;
    margin: 8px 20px;
    box-shadow: 2px 2px 8px 0 #cfcfcf;
}

#trial-main-wrapper.hasHover .image-box:hover {
    box-shadow: 2px 2px 8px 0 #051fcb7b;
    cursor: pointer;
}

#trial-main-wrapper.hasTouch .image-box:active {
    box-shadow: 2px 2px 8px 0 #051fcb7b;
}

.study-image {
    width: 300px;
    height: 300px;
}
</style>