<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    created() {
        axios.get(store.apiArchetypeURL).then((response) => {
            store.optionList = response.data;
        })
    },
}
</script>

<template>
    <div class="cards-filter">
        <select name="card-select">
            <option value="">Select archetype</option>
            <option v-for="option in store.optionList">{{ option.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.cards-filter {
    margin: 25px auto;
    padding-left: 15px;
    max-width: 1180px;

    select {
        font-family: inherit;
        font-size: 14px;
        padding: 10px 8px;
        border-radius: 5px;
    }
}
</style>
