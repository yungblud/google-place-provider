import dotenv from 'dotenv';
import GooglePlace from '../lib';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('place-details', () => {
    const googlePlace = new GooglePlace(key);
    it('is place-details api status OK', () => {
        googlePlace.placeDetails('ChIJN1t_tDeuEmsRUsoyG83frY4').then(result => {
            const { status } = result;
            expect(status).toEqual('OK');
        });
    });
});
