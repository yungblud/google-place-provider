import dotenv from 'dotenv';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('api key test', () => {
    it('test if API_KEY was provided on .env file', () => {
        expect(key).toBeTruthy();
    });
});
