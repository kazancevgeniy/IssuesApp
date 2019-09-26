<template>
    <div class="issues">
        <div class="issues__list-wrapper">
            <ul class="issues__list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['getIssues'])
    },
    created() {
        this.loadIssues()
    },
    methods: {
        ...mapActions(['loadIssues'])
    }
}
</script>

<style lang="scss" scoped>
    .issues {
        width: 100%;

        &__list-wrapper {
            width: 50%;
            margin: 0 auto;
        }
    }
</style>