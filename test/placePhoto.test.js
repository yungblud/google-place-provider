import dotenv from 'dotenv';
import GooglePlace from '../lib';

dotenv.config();

const { GOOGLE_API_KEY: key } = process.env;

describe('placePhoto', () => {
    const googlePlace = new GooglePlace(key);

    it('placePhoto api status OK', () => {
        return googlePlace
            .placePhoto({
                maxwidth: 400,
                photoreference:
                    'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU',
            })
            .then((result) => {
                expect(result).toBeTruthy();
            });
    });
});
