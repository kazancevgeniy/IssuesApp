<template>
    <div class="issues" v-if="getIssues.length">
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

        &__list-wrapper {
            width: 50%;
            margin: 100px auto;
            // margin-top: 100px;
            // margin-bottom: ;
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