<template>
    <div class="issues">
        <div class="issues__list-wrapper">
            <ul
                v-for="issue in getIssues"
                :key="issue.id"
                class="issues__list"
            >
                <IssueListItem :issue="issue"/>
                <!-- <li class="issue__item">
                    <span>{{issue.number}}</span>
                    <span>{{issue.title}}</span>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import IssueListItem from '@/components/IssueListItem.vue'

export default {
    name: 'Issues',
    components: {
        IssueListItem
    },
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
            margin-top: 100px;
        }
    }
</style>