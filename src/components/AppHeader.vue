<script>

export default {}
</script>

<template>
    <header>
        <div>
            <img src="/logo.png" alt="">
        </div>
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/partials/variables' as *;

header {
    display: flex;
    align-items: center;
    background-color: $secondary-color;
    padding: 20px;

    div {
        background-color: #fff;

        img {
            width: 70px;
        }
    }

    h1 {
        margin-left: 20px;
    }

}
</style>