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
        digits: [],
        words: [],
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
            this.round2 = true;
            this.store.study_group == 1 ? this.images.push(...this.digits) : this.images.push(...this.words);
            if(this.index >= this.images.length - 1) {  
                writeUserDataFromStore();
                this.$router.push("question");
                return;
            }
            this.index++;
        } else {
            writeUserDataFromStore();
            this.$router.push("question");
        }
      }
    }
}

//SVG import-----------------------------------

//letters
import twoW from "@/assets/svgs/2W.svg";
import threeG from "@/assets/svgs/3G.svg";

import sevenP from "@/assets/svgs/7P.svg";
import fiveS from "@/assets/svgs/5S.svg";

import fourH from "@/assets/svgs/4H.svg";
import threeD from "@/assets/svgs/3D.svg";

import sevenK from "@/assets/svgs/7K.svg";
import eightE from "@/assets/svgs/8E.svg";

import fiveH from "@/assets/svgs/5H.svg";
import threeW from "@/assets/svgs/3W.svg";

import eightJ from "@/assets/svgs/8J.svg";
import nineA from "@/assets/svgs/9A.svg";

import fiveV from "@/assets/svgs/5V.svg";
import threeS from "@/assets/svgs/3S.svg";

import eightP from "@/assets/svgs/8P.svg";
import nineV from "@/assets/svgs/9V.svg";

import sixT from "@/assets/svgs/6T.svg";
import sevenC from "@/assets/svgs/7C.svg";

import threeB from "@/assets/svgs/3B.svg";
import sixH from "@/assets/svgs/6H.svg";

import fourF from "@/assets/svgs/4F.svg";
import sixX from "@/assets/svgs/6X.svg";

import fiveL from "@/assets/svgs/5L.svg";
import fourD from "@/assets/svgs/4D.svg";

import fourR from "@/assets/svgs/4R.svg";
import sixN from "@/assets/svgs/6N.svg";

import sixG from "@/assets/svgs/6G.svg";
import eightK from "@/assets/svgs/8K.svg";

import sevenH from "@/assets/svgs/7H.svg";
import fourA from "@/assets/svgs/4A.svg";

import sixJ from "@/assets/svgs/6J.svg";
import fiveW from "@/assets/svgs/5W.svg";
//---------------------------------------------

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