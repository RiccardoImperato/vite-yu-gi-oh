<script>
import CardsList from './CardsList.vue';
import FoundedCards from './FoundedCards.vue';
import CardsFilter from './CardsFilter.vue';

export default {
    components: {
        CardsList,
        FoundedCards,
        CardsFilter
    }
}
</script>

<template>
    <CardsFilter />
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
