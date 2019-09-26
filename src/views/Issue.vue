<template>
    <div v-if="issue" class="issue">
        <p class="issue__title">Номер: <span>{{issue.number}}</span></p>
        <p class="issue__title">Назавние задачи: <span>{{issue.title}}</span></p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Issue',
    data() {
        return {
            issue: null
        }
    },
    created() {
        this.getIssueById()
    },
    methods: {
        async getIssueById() {
            const {data} = await axios.get('https://api.github.com/repos/vuejs/vue/issues/' + this.$route.params.id);
            this.issue = data;
        }
    }
}
</script>

<style lang="scss" scoped>
    .issue {
        width: 80%;
        margin: 0 auto;
        margin-top: 100px;

        &__title {
            font-size: 15px;
            color: grey;
            span {
                color: black;
            }
        }
    }
</style>