import axios from 'axios';
import {
    googlePlaceAutocompleteURI,
    googlePlaceDetailsURI,
    googlePlaceFindPlaceSearchURI,
    googlePlaceNearbySearchURI,
    googlePlaceTextSearchURI,
    googlePlacePhotoURI,
} from './constants';
import {
    AutocompleteHTTPResult,
    PlaceDetailHTTPResult,
    AutocompleteOptions,
    PlaceDetailOptions,
    FindPlaceSearchOptions,
    FindPlaceSearchHTTPResult,
    NearbySearchOptions,
    NearbySearchHTTPResult,
    TextSearchOptions,
    TextSearchHTTPResult,
    PhotoOptions,
} from './types';
import { objectToQuery } from './utils';
import { BinaryLike } from 'crypto';

// tslint:disable-next-line: no-var-requires
axios.defaults.adapter = require('axios/lib/adapters/http');

export default class GooglePlace {
    apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async autocomplete(
        options: AutocompleteOptions
    ): Promise<AutocompleteHTTPResult> {
        if (!this.apiKey) throw new Error('api key was not provided');
        try {
            const queryString = objectToQuery(options);
            const result = await axios.get(
                `${googlePlaceAutocompleteURI}?key=${this.apiKey}${queryString}`
            );
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async placeDetails(
        options: PlaceDetailOptions
    ): Promise<PlaceDetailHTTPResult> {
        if (!this.apiKey) throw new Error('api key was not provided');

        try {
            const queryString = objectToQuery(options);
            const result = await axios.get(
                `${googlePlaceDetailsURI}?key=${this.apiKey}${queryString}`
            );
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async findPlaceSearch(
        options: FindPlaceSearchOptions
    ): Promise<FindPlaceSearchHTTPResult> {
        if (!this.apiKey) throw new Error('api key was not provided');

        try {
            const queryString = objectToQuery(options);
            const result = await axios.get(
                `${googlePlaceFindPlaceSearchURI}?key=${this.apiKey}${queryString}`
            );
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async nearbySearch(
        options: NearbySearchOptions
    ): Promise<NearbySearchHTTPResult> {
        if (!this.apiKey) throw new Error('api key was not provided');

        try {
            const queryString = objectToQuery(options);
            const result = await axios.get(
                `${googlePlaceNearbySearchURI}?key=${this.apiKey}${queryString}`
            );
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async textSearch(
        options: TextSearchOptions
    ): Promise<TextSearchHTTPResult> {
        if (!this.apiKey) throw new Error('api key was not provided');

        try {
            const queryString = objectToQuery(options);
            const result = await axios.get(
                `${googlePlaceTextSearchURI}?key=${this.apiKey}${queryString}`
            );
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async placePhoto(options: PhotoOptions): Promise<BinaryLike> {
        if (!this.apiKey) throw new Error('api key was not provided');

        try {
            const queryString = objectToQuery(options);
            const result = await axios.get(
                `${googlePlacePhotoURI}?key=${this.apiKey}${queryString}`
            );

            return result.data;
        } catch (e) {
            throw e;
        }
    }
}
