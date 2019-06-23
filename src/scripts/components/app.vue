<template>
    <div>
        <TweetList :tweets='tweets' />
    </div>   
</template>

<script>

import TweetList from '@/components/tweet-list';
export default {
    name: 'App',
    components: {
        TweetList
    },
    data() {
        return{
            tweets: [
                { id: 'a1', body: 'b1' },
                { id: 'a2', body: 'b2' },
                { id: 'a3', body: 'b3' },
                { id: 'a4', body: 'b4' }
            ]
        }
    }
}
</script>

<style>

</style>