<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <div>
        <h4>
            Found {{ store.cardlist.length }} cards
        </h4>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;

div {
    width: 100%;
    margin: 0 15px;
    padding: 15px 8px;
    background-color: #212529;
    color: $secondary-color;
}
</style>
