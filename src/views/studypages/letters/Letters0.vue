<template>
    <main class="main-wrapper">
        <div class="card">
            <div class="flex flex-wrap card-container justify-content-center" style="max-width: 700px;">
                <div class="image-box">
                    <img src="@/assets/svgs/2W.svg" class="study-image" @click="handleClick(1)">
                </div>
                <div class="image-box">
                    <img src="@/assets/svgs/3G.svg" class="study-image" @click="handleClick(2)">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import "/node_modules/primeflex/primeflex.css";
import { writeUserDataFromStore } from "@/database/db";
import { useUserStore } from "@/stores/users";
import { toRaw } from 'vue';

export default {
    name: 'Letters1',
    setup: () => ({ store: useUserStore() }),
    data() {
      return {
        correct_img: 2,
        start_timestamp: null,
        end_timestamp: null,
        images: [
            "@/assets/svgs/2W.svg",
            "@/assets/svgs/7P.svg",
        ],
        index: 0,
        cur_img: "2W"
      }
    },
    created() {
        this.start_timestamp = Date.now();
    },
    mounted() {
        
    },
    methods: {
      handleClick(imageNumber) {
        this.end_timestamp = Date.now();

        const is_user_right = imageNumber == this.correct_img ? true : false;
        const time = this.end_timestamp - this.start_timestamp;

        console.log(this.correct_img);
        console.log(is_user_right);
        console.log(time);

        this.store.insertLetterData(0, {correct_img: this.correct_img, clicked_img: imageNumber, is_user_right: is_user_right, time: time});
        console.log(toRaw(this.store.getLetterDataById(0)));

        //writeUserDataFromStore();

        this.$router.push("question");
      },
      /*makeImage() {
        var img = document.createElement('img');
        img.src = this.images[this.index];
        document.getElementById('study-image-1').appendChild(img);
      }*/
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