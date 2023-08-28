import * as core from '@actions/core';

import { Config } from './configuration';

describe('Configuration', () => {
    describe('githubToken', () => {
        it('should return the value of the input', () => {
            const expected = 'token';
            const spy = jest.spyOn(core, 'getInput').mockReturnValue(expected);
            expect(Config.githubToken).toStrictEqual(expected);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
