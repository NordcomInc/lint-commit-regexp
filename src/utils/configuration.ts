import { getInput } from '@actions/core';

const Config = {
    get githubToken(): string {
        return getInput('github-token');
    }
};

export { Config };
