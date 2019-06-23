import { assert } from "chai";

import App from '@/components/app';
import TweetList from '@/components/tweet-list';

import { mount } from '@vue/test-utils';

//@ts-check

suite('App', () => {
    it('should plus 2 and 2', () => {
        const input = 2 + 2;
        const output = 4;
        assert.equal(input, output);
    });

    it('should render TweetList', () => {
        const wrapper = mount(App, {
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(TweetList));
    });
});

