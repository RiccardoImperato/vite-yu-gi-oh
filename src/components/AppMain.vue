<script>
import CardsList from './CardsList.vue';

export default {
    components: {
        CardsList
    }
}
</script>

<template>
    <section class="container">
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
