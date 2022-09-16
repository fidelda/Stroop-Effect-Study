<template>
  <main>
      <div class="card">
        <div class="flex flex-wrap-reverse md:flex-wrap card-container purple-container" style="max-width: 500px">
            <div class="flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 border-round" style="min-width: 200px; min-height: 100px">
                <span class="p-float-label">
                    <InputText id="inputtext" type="text" v-model="test" />
                    <label for="inputtext">First Name</label>
                </span>
            </div>
            <div class="flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 border-round" style="min-width: 200px; min-height: 100px">
              <Button label="Submit" @click="handleClick"></Button>
            </div>
            <div class="flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 border-round" style="min-width: 200px; min-height: 100px">3</div>
        </div>
      </div>
  </main>
</template>

<script lang = "ts">
  import { ref, onMounted } from 'vue';
  import { db } from '@/database/db'
  
  export default {
      setup() {
          onMounted(() => {
            time1.value = Date.now();
            console.log(time1.value);
          });
          const handleClick = () => {
            console.log(Date.now() - time1.value)
            const ref = db.ref('users/email');
            ref.on('value', function (snapshot) {
              console.log("In Value");
              console.log(snapshot.val);
            }, function(error) {
            console.error(error);
            });
          };
          const first_name = ref();
          const time1 = ref();
          return { first_name, handleClick }
      }
  }
</script>