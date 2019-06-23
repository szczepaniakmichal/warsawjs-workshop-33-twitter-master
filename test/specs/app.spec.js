import { assert } from "chai";

import App from '@/components/app';
import nock from 'nock';
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

    it('should fetch tweets via HTTP request', async () => {
        const wrapper = mount(App, {
            stubs: {
                Tweet: true
            }
        });

        // @ts-ignore
        assert.isFunction(wrapper.vm.fetchTweets);

        // @ts-ignore
        const ft = wrapper.vm.fetchTweets;

        nock("http://localhost:3000")

            .get('/tweets')

            .reply(200, [

                { id: 'id', body: 'body' }

            ]);

        const response = await ft();

        console.log(response); // JSON

        assert.lengthOf(response, 1);
    });
});



