import { assert } from "chai";

import TweetList from '@/components/tweet-list';
import Tweet from '@/components/tweet';

import { mount } from '@vue/test-utils';

//@ts-check

suite('tweetList', () => {
    it('should render single TweetList item', () => {
        const wrapper = mount(TweetList);
        assert.ok(wrapper.contains(Tweet));
    });
});

