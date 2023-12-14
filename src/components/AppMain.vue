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
            if (this.store.searchArchetype === '') {
                axios.get(this.store.apiURL + '?num=20&offset=0').then((response) => {
                    this.store.cardlist = response.data.data;
                });
            } else {
                axios.get(this.store.apiURL + '?archetype=' + this.store.searchArchetype).then((response) => {
                    this.store.cardlist = response.data.data;
                });
            }

        },
    },
    created() {
        this.search();
    }
}
</script>

<template>
    <CardsFilter @search="search" />
    <section class="container" v-if="this.store.cardlist.length != 0">
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
