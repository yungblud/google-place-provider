import GooglePlace from '../lib';
import dotenv from 'dotenv';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('nearbySearch', () => {
    const googlePlace = new GooglePlace(key);

    it('nearbySearch API Status OK', () => {
        return googlePlace
            .nearbySearch({
                language: 'en',
                radius: 1500,
                location: '-33.8670522,151.1957362',
                type: 'restaurant',
                keyword: 'cruise',
            })
            .then((result) => {
                expect(result.status).toBe('OK');
            });
    });
});
