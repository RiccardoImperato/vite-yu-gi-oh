<script>

export default {
    props: {
        name: String,
        archetype: String,
        img: Array,
    }
}
</script>

<template>
    <div class="card">
        <div>
            <img :src="img[0].image_url" :alt="name">
        </div>
        <h3>{{ name }}</h3>
        <p>{{ archetype }}</p>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;

.card {
    width: calc((100% / 5) - 30px);
    text-align: center;
    margin: 15px;
    background-color: $primary-color;

    img {
        width: 100%;
    }

    h3 {
        font-size: 13px;
        text-transform: uppercase;
        color: $secondary-color;
        margin: 20px 10px;
    }

    p {
        margin-bottom: 10px;
    }

}
</style>