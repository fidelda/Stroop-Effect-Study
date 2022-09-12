<template>
  <main>
    <TheWelcome />
    <div class="field col-12 md:col-4">
      <span class="p-float-label">
        <InputText id="inputtext" type="text" v-model="first_name" />
        <label for="inputtext">First Name</label>
      </span>
    </div>
    <div>
      <Button label="Submit" @click="handleClick"></Button>
    </div>
  </main>
</template>

<script lang = "ts">
  import { ref, onMounted } from 'vue';
  
  export default {
      setup() {
          onMounted(() => {
            time1.value = Date.now();
            console.log(time1.value);
          });
          const handleClick = () => {
            console.log(Date.now() - time1.value)
          };
          const first_name = ref();
          const time1 = ref();
          return { first_name, handleClick }
      }
  }
</script>