import GooglePlace from '../lib';
import dotenv from 'dotenv';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('textSearch', () => {
    const googlePlace = new GooglePlace(key);

    it('textSearch API Status OK', () => {
        return googlePlace
            .textSearch({
                query: '123 main street',
            })
            .then((result) => {
                expect(result.status).toBe('OK');
            });
    });
});
