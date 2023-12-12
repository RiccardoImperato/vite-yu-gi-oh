<script>
import axios from 'axios';
import Card from './Card.vue';

export default {
    components: {
        Card
    },
    data() {
        return {
            cardlist: [],
            apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
        };
    },
    created() {
        axios.get(this.apiURL).then((response) => {
            this.cardlist = response.data.data;
        })
    }
}
</script>

<template>
    <Card v-for="card in cardlist" :name="card.name" :archetype="card.archetype" :img="card.card_images" />
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;
</style>