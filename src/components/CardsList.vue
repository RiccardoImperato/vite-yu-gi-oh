<script>
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
}
</script>

<template>
    <Card v-for="card in this.store.cardlist" :name="card.name" :archetype="card.archetype" :img="card.card_images" />
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;
</style>