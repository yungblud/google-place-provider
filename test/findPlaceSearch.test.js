import GooglePlace, { PlaceSearchInputTypes } from '../lib';
import dotenv from 'dotenv';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('findPlaceSearch', () => {
    const googlePlace = new GooglePlace(key);

    it('findPlaceSearch API Status OK', () => {
        return googlePlace
            .findPlaceSearch({
                input: 'Museum of Contemporary Art Australia',
                inputtype: PlaceSearchInputTypes.TEXT_QUERY,
                fields:
                    'photos,formatted_address,name,rating,opening_hours,geometry',
            })
            .then((result) => {
                expect(result.status).toBe('OK');
            });
    });
});
