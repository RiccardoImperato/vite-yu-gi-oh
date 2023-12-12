<script>


export default {

}
</script>

<template>
    <div class="cards-filter">
        <select name="card-select">
            <option value="alien">Alien</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;

.cards-filter {
    margin: 25px auto;
    padding-left: 15px;
    max-width: 1180px;

    select {
        font-size: 14px;
        width: 160px;
        padding: 10px 8px;
        border-radius: 5px;
    }
}
</style>
