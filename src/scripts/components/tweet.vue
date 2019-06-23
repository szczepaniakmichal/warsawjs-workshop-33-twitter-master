<template>
    <b-card 
    class="m-3" 
    :title="tweet.author.name" 
    :sub-title="tweet.created_time | myDate"
    :img-src="tweet.author.avatar_url">
        <b-card-text>
            {{ tweet.body }}
        </b-card-text>
    </b-card>

</template>

<script>
import { myDate } from '@/helpers/my-date';
export default {
    name: 'Tweet',

    props: {
        tweet: {
            id: String,
            body: String,
            author: Object
        }
    },
    computed: {
        created_time() {
            // const d = new Date(this.tweet.created_time)
            // return d.toLocaleString('pl-PL');
            return myDate(this.tweet.created_time);
        }
    },
    filters: {
        myDate
    }
}
</script>

<style>

</style>
