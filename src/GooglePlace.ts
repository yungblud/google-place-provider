import axios from 'axios';
import { googlePlaceSearchURI } from './constants';
import { AutocompleteHTTPResult, PlaceDetailHTTPResult } from 'types';

export default class GooglePlace {
    apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async autocomplete(searchWord: string): Promise<AutocompleteHTTPResult> {
        const result = await axios.get(
            `${googlePlaceSearchURI}?input=${searchWord}&language=kr&key=${this.apiKey}`
        );
        return result.data;
    }

    async placeDetails(placeId: string): Promise<PlaceDetailHTTPResult> {
        const result = await axios.get(
            `${googlePlaceSearchURI}?place_id=${placeId}&key=${this.apiKey}`
        );
        return result.data;
    }
}
