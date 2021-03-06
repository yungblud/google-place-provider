import dotenv from 'dotenv';
import GooglePlace from '../lib';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('place-details', () => {
    const googlePlace = new GooglePlace(key);

    it('is place-details api status OK', () => {
        return googlePlace
            .placeDetails({
                language: 'en',
                place_id: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
            })
            .then((result) => {
                expect(result.status).toBe('OK');
            });
    });
});
