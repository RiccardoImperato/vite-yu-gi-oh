<script>
import CardsList from './CardsList.vue';
import FoundedCards from './FoundedCards.vue'

export default {
    components: {
        CardsList,
        FoundedCards
    }
}
</script>

<template>
    <section class="container">
        <FoundedCards />
        <CardsList />
    </section>
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;

.container {
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    max-width: 1180px;
    padding: 50px;
    background-color: $secondary-color;
}
</style>
