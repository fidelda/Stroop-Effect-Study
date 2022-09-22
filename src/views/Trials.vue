<template>
    <main class="main-wrapper">
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

<script>
import "/node_modules/primeflex/primeflex.css";
import { writeUserDataFromStore } from "@/database/db";
import { useUserStore } from "@/stores/users";
import { toRaw } from "vue";

import {
    twoW, threeG, sevenP, fiveS, fourH, threeD, sevenK,
    eightE, fiveH, threeW, eightJ, nineA, fiveV, threeS,
    eightP, nineV, sixT, sevenC, threeB, sixH, fourF,
    sixX, fiveL, fourD, fourR, sixN, sixG, eightK,
    sevenH, fourA, sixJ,fiveW
} from "@/components/LetterComponents.vue";

import {
    two5, three4
} from "@/components/DigitComponents.vue";

import {
    twoFive, threeFour
} from "@/components/WordComponents.vue";

export default {
    name: 'Trials',
    setup: () => ({ store: useUserStore() }),
    data() {
      return {
        start_timestamp: null,
        images: [
            {first: twoW,   second: threeG, correct_img: 2},
            {first: sevenP, second: fiveS,  correct_img: 1},
            {first: fourH,  second: threeD, correct_img: 1},
            {first: sevenK, second: eightE, correct_img: 2},

            {first: fiveH,  second: threeW, correct_img: 1},
            {first: eightJ, second: nineA,  correct_img: 2},
            {first: fiveV,  second: threeS, correct_img: 1},
            {first: eightP, second: nineV,  correct_img: 2},

            {first: sixT,   second: sevenC, correct_img: 2},
            {first: threeB, second: sixH,   correct_img: 2},
            {first: fourF,  second: sixX,   correct_img: 2},
            {first: fiveL,  second: fourD,  correct_img: 1},

            {first: fourR,  second: sixN,   correct_img: 2},
            {first: sixG,   second: eightK, correct_img: 2},
            {first: sevenH, second: fourA,  correct_img: 1},
            {first: sixJ,   second: fiveW,  correct_img: 1}
        ],
        digits: [
            {first: two5,   second: three4,  correct_img: 2}
        ],
        words: [
            {first: twoFive,   second: threeFour,  correct_img: 2}
        ],
        index: 0,
        round2: false
      }
    },
    created() {
        this.start_timestamp = Date.now();
    },
    methods: {
      handleClick(clicked_img) {
        const time = Date.now() - this.start_timestamp;
        const correct_img = this.images[this.index].correct_img;
        const is_user_right = clicked_img == correct_img;
        
        this.store.insertTrialData(this.index, {correct_img: correct_img, clicked_img: clicked_img, is_user_right: is_user_right, time: time});

        if(this.index < this.images.length - 1) {
            this.index++;
            this.start_timestamp = Date.now();
        } else if (!this.round2) {
            const study_group = this.store.user.study_group;
            study_group == 1 ? this.images.push(...this.digits) : this.images.push(...this.words);
            this.round2 = true;
            this.index++;
        } else {
            writeUserDataFromStore();
            this.$router.push("question");
        }
      }
    }
}

</script>

<style>
    html {
        background-color: #fbfbfb;
    }
    
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

    .image-box:hover {
        box-shadow: 2px 2px 8px 0 #051fcb7b;
        cursor: pointer;
    }

    .study-image {
        width: 300px;
        height: 300px;
    }
</style>