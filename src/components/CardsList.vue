<script>
import axios from 'axios';
import Card from './Card.vue';
import { store } from '../store';

export default {
    components: {
        Card
    },
    data() {
        return {
            store,
        };
    },
    created() {
        axios.get(store.apiURL).then((response) => {
            store.cardlist = response.data.data;
        })
    }
}
</script>

<template>
    <Card v-for="card in store.cardlist" :name="card.name" :archetype="card.archetype" :img="card.card_images" />
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;
</style>