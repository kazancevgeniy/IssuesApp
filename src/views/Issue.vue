<template>
    <div v-if="issue" class="issue">
        <p class="issue__title">Номер: <span>{{issue.number}}</span></p>
        <p class="issue__title">Назавние задачи: <span>{{issue.title}}</span></p>
    </div>
    <div class="loading" v-else>
        <h1>Загрузка...</h1>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Issue',
    props: {
        issue: {
            type: Object
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
    .loading {
        width: 500px;
        margin: 100px auto;
        text-align: center;
    }
</style>