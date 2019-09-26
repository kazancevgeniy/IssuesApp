<template>
    <div class="issue">
        <div class="issue-wrapper">
            <div class="issue__icon-wrapper">
                <svg class="issue__icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
                </svg>
            </div>
            <div class="issue__info">
                <span class="issue__info-number">#{{issue.number}}</span>
                <router-link
                    :value="6"
                    class="issue__info-title"
                    :to="`/issues/${issue.number}`"
                >{{issue.title}}</router-link>
            </div>
            <div class="issue__comment">
                <span><svg class="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                    <path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path>
                    </svg>
                </span>
                <span class="issue__comment-sum">{{issue.comments}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IssueListItem',
    props: {
        issue: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
    .issue {
        .issue-wrapper {
            width: 100%;
            display: flex;
            padding: 15px;
            border-top: 1px solid #e1e4e8;
            // justify-content: space-between;
            .issue__icon-wrapper {
                margin-right: 10px;
                
                .issue__icon {
                    fill: #28a745;
                }
            }
            .issue__info {
                max-width: 600px;
                white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                &-number {
                    margin-right: 10px;
                    font-size: 12px;
                    color: darken(grey, 20%);
                }
                &-title {
                    // margin-right: 10px;
                    font-size: 16px;
                    color: black;
                    text-decoration: none;
                    font-weight: 600;
                    

                    &:hover {
                        color: grey;
                    }
                }
            }
            .issue__comment {
                margin-left: auto;
                &-sum {
                    display: inline-block;
                    width: 10px;
                    font-size: 15px;
                    text-align: right;
                }
            }
        }
    }
</style>