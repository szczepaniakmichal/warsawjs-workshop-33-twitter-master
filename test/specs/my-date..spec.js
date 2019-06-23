import { myDate } from '@/helpers/my-date';

import { assert } from 'chai';



suite('myDate', () => {

    test('should return null when passed falsy value', () => {

        const input = myDate('');

        const output = null;

        assert.equal(input, output);

    });



    test('should return proper date when pass UTC Date string', () => {

        const input = myDate('Sat Feb 23 2019 10:16:25 GMT+0100 (czas środkowoeuropejski standardowy)');

        const output = /2019/;

        assert.match(input, output);

    });

});