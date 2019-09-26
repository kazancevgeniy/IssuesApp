<template>
    <div class="home">
        <p class="home__description">
            This is homepage, click 
            <router-link to="/issues" class="home__description-link">Issues</router-link> 
            to see open issues
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .home {
        width: 100%;
        padding-top: 100px;

        &__description {
            width: 50%;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            font-size: 22px;
            border: 1px dashed grey;

            &-link {
                color: blue;
                cursor: pointer;
                text-decoration: none;
            }
        }
    }
</style>