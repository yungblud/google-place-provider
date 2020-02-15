import axios from 'axios';
import { googlePlaceAutocompleteURI, googlePlaceDetailsURI } from './constants';
import {
    AutocompleteHTTPResult,
    PlaceDetailHTTPResult,
    AutocompleteOptions,
} from './types';

axios.defaults.adapter = require('axios/lib/adapters/http');

export default class GooglePlace {
    apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async autocomplete(
        searchWord: string,
        options: AutocompleteOptions = { lang: 'en' }
    ): Promise<AutocompleteHTTPResult> {
        if (!this.apiKey) throw new Error('api key was not provided');
        try {
            const result = await axios.get(
                `${googlePlaceAutocompleteURI}?input=${searchWord}&language=${options.lang}&key=${this.apiKey}`
            );
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async placeDetails(placeId: string): Promise<PlaceDetailHTTPResult> {
        if (!this.apiKey) throw new Error('api key was not provided');

        try {
            const result = await axios.get(
                `${googlePlaceDetailsURI}?place_id=${placeId}&key=${this.apiKey}`
            );
            return result.data;
        } catch (e) {
            throw e;
        }
    }
}
