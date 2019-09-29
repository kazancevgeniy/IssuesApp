<template>
    <div class="issues" v-if="getIssues.length">
        <div class="issues__list-wrapper">
            <div class="issues__title">Page: {{pageNumber}}</div>
            <ul>
                <IssueListItem
                    v-for="issue in getIssues"
                    :key="issue.id"
                    :issue="issue"
                />
            </ul>
            <div class="issues__pagination">
                <button @click="goPrev" class="issues__pagination-btn">Prev</button>
                <button @click="goNext" class="issues__pagination-btn">Next</button>
            </div>
        </div>
    </div>
    <div class="loading" v-else>
        <h1>Загрузка...</h1>
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
            pageNumber: 1
        }
    },
    computed: {
        ...mapGetters(['getIssues'])
    },
    created() {
        this.loadIssues(this.pageNumber)
    },
    methods: {
        goPrev() {
            if (this.pageNumber >= 2) {
                this.pageNumber--;
                this.loadIssues(this.pageNumber)
            }
        },
        goNext() {
            this.pageNumber++;
            this.loadIssues(this.pageNumber)
        },
        ...mapActions(['loadIssues'])
    }
}
</script>

<style lang="scss" scoped>
    .issues {
        width: 100%;

        &__title {
            text-align: center;
            padding: 20px 0;
        }
        &__list-wrapper {
            width: 50%;
            margin: 0px auto;
        }
        &__pagination {
            margin-top: 40px;
            display: flex;
            justify-content: center;

            &-btn {
                padding: 5px;
                font-size: 20px;
                cursor: pointer;
                margin-right: 20px;
            }
        }
    }
    .loading {
        width: 500px;
        margin: 100px auto;
        text-align: center;
    }
</style>