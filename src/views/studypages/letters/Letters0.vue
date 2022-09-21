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

//SVG import-----------------------------------
import twoW from "@/assets/svgs/2W.svg";
import threeG from "@/assets/svgs/3G.svg";

import sevenP from "@/assets/svgs/7P.svg";
import fiveS from "@/assets/svgs/5S.svg";
//---------------------------------------------

export default {
    name: 'Letters1',
    setup: () => ({ store: useUserStore() }),
    data() {
      return {
        start_timestamp: null,
        images: [
            {first: twoW, second: threeG, correct_img: 2},
            {first: sevenP, second: fiveS, correct_img: 1},
        ],
        index: 0
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
        
        this.store.insertLetterData(this.index, {correct_img: correct_img, clicked_img: clicked_img, is_user_right: is_user_right, time: time});

        if(this.index < this.images.length - 1) {
            this.index++;
            this.start_timestamp = Date.now();
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