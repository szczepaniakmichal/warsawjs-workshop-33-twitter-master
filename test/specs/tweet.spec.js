import { assert } from "chai";

import TweetList from '@/components/tweet-list';
import Tweet from '@/components/tweet';

import { mount } from '@vue/test-utils';

//@ts-check

suite('tweetList', () => {
    it('should render single TweetList item', () => {
        const wrapper = mount(TweetList, {
            propsData: {
                tweets: [
                    { id: 'a11', body: 'b11' },
                    { id: 'a22', body: 'b22' }
                ]
            },
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(Tweet));
    });
});

