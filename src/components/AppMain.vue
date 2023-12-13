<script>
import CardsList from './CardsList.vue';
import FoundedCards from './FoundedCards.vue';
import CardsFilter from './CardsFilter.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    components: {
        CardsList,
        FoundedCards,
        CardsFilter
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            axios.get(this.store.apiURL + '?archetype=' + this.store.searchArchetype).then((response) => {
                store.cardlist = response.data.data;
            });
        },
    },
    created() {
        this.search();
    }
}
</script>

<template>
    <CardsFilter @search="search" />
    <section class="container">
        <FoundedCards />
        <CardsList />
    </section>
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;

.container {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    background-color: $secondary-color;
}
</style>
