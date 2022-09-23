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

<script>
import "/node_modules/primeflex/primeflex.css";
import { writeUserDataFromStore } from "@/database/db";
import { useUserStore } from "@/stores/users";

import {
    twoW, threeG,
    sevenP, fiveS,
    fourH, threeD,
    sevenK, eightE,
    fiveH, threeW,
    eightJ, nineA,
    fiveV, threeS,
    eightP, nineV, 
    sixT, sevenC, 
    threeB, sixH, 
    fourF, sixX, 
    fiveL, fourD,
    fourR, sixN,
    sixG, eightK,
    sevenH, fourA,
    sixJ,fiveW
} from "@/components/LetterComponents.vue";

import {
    two5, three4,
    seven4, five5,
    four0, /*three4*/
    seven9, eight5,

    five0, three5,
    eight9, nine4,
    /*five0*/ three9,
    /*eight9*/ nine0,

    six4, seven5,
    /*three5, six4,*/
    /*four0, six4*/
    five9, four5,

    /*four0*/ six5,
    /*seven9*/ four4,
    /*five0, seven9*/
    six9 /*five0*/
} from "@/components/DigitComponents.vue";

import {
    twoFive, threeFour,
    sevenFour, fiveFive,
    fourZero, /*threeFour*/
    sevenNine, eightFive,

    fiveZero, threeFive,
    eightNine, nineFour,
    /*fiveZero*/ threeNine,
    /*eightNine*/ nineZero,

    sixFour, sevenFive,
    /*threeFive, sixFour,*/
    /*fourZero, sixFour*/
    fiveNine, fourFive,

    /*fourZero*/ sixFive,
    /*sevenNine*/ fourFour,
    /*fiveZero, sevenNine*/
    sixNine /*fiveZero*/
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
            {first: two5,   second: three4, correct_img: 2},
            {first: seven4, second: five5,  correct_img: 1},
            {first: four0,  second: three4, correct_img: 1},
            {first: seven9, second: eight5, correct_img: 2},

            {first: five0,  second: three5, correct_img: 1},
            {first: eight9, second: nine4,  correct_img: 2},
            {first: five0,  second: three9, correct_img: 1},
            {first: eight9, second: nine0,  correct_img: 2},

            {first: six4,   second: seven5, correct_img: 2},
            {first: three5, second: six4,   correct_img: 2},
            {first: four0,  second: six4,   correct_img: 2},
            {first: five9,  second: four5,  correct_img: 1},

            {first: four0,  second: six5,   correct_img: 2},
            {first: seven9, second: four4,  correct_img: 1},
            {first: five0,  second: seven9, correct_img: 2},
            {first: six9,   second: five0,  correct_img: 1}
        ],
        words: [
            {first: twoFive,   second: threeFour, correct_img: 2},
            {first: sevenFour, second: fiveFive,  correct_img: 1},
            {first: fourZero,  second: threeFour, correct_img: 1},
            {first: sevenNine, second: eightFive, correct_img: 2},

            {first: fiveZero,  second: threeFive, correct_img: 1},
            {first: eightNine, second: nineFour,  correct_img: 2},
            {first: fiveZero,  second: threeNine, correct_img: 1},
            {first: eightNine, second: nineZero,  correct_img: 2},

            {first: sixFour,   second: sevenFive, correct_img: 2},
            {first: threeFive, second: sixFour,   correct_img: 2},
            {first: fourZero,  second: sixFour,   correct_img: 2},
            {first: fiveNine,  second: fourFive,  correct_img: 1},

            {first: fourZero,  second: sixFive,   correct_img: 2},
            {first: sevenNine, second: fourFour,  correct_img: 1},
            {first: fiveZero,  second: sevenNine, correct_img: 2},
            {first: sixNine,   second: fiveZero,  correct_img: 1}
        ],
        index: 0,
        round2: false,
        last_touch_time: 0
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
            this.start_timestamp = Date.now();
        } else {
            writeUserDataFromStore();
            this.$router.push("question");
        }
      },
      enableHover() {
        if (new Date() - this.last_touch_time < 500) {
            return;
        }
        document.getElementById("trial-main-wrapper").classList.remove('hasTouch');
        document.getElementById("trial-main-wrapper").classList.add('hasHover');
      },
      disableHover() {
        this.last_touch_time = new Date();
        document.getElementById("trial-main-wrapper").classList.remove('hasHover');
        document.getElementById("trial-main-wrapper").classList.add('hasTouch');
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