<template>
    <main>
        <label>{{testdata}}</label>
    </main>
</template>

<script>
import { useUserStore } from "@/stores/users";

export default {
    name: 'Endscreen',
    setup: () => ({ store: useUserStore() }),
    data() {
        return {
            testdata: ''
        }
    },
    created() {
        this.testdata = this.store.getLetterDataById(1);
    }
}
</script>

<style>

</style>