import GooglePlace from '../lib';
import dotenv from 'dotenv';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('autocomplete', () => {
    const googlePlace = new GooglePlace(key);

    it('is autocomplete api status OK', () => {
        googlePlace.autocomplete('hello').then(result => {
            expect(reuslt.status).toEqual('OK');
        });
    });
});
