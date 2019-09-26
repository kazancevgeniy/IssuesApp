<template>
    <div class="navbar">
        <ul class="navbar__menu">
            <router-link
                to="/"
                class="navbar__item"
                tag="li"
                exact
                active-class="active"
            >Home</router-link>
            <router-link
                to="/issues"
                class="navbar__item"
                tag="li"
                exact
                active-class="active"
            >Issues</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .navbar {
        height: 50px;
        background-color: #1b1d24;
        color: darken(#fff, 20%);

        &__menu {
            display: flex;
            justify-content: center;
            padding: 15px;
            height: 100%;
        }

        &__item {
            margin-right: 40px;
            text-transform: uppercase;
            cursor: pointer;
            font-size: 18px;
        }
    }
    .active {
        text-decoration: underline;
        font-size: 20px;
    }
</style>