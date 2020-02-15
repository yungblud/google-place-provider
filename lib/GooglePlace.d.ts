import { AutocompleteHTTPResult, PlaceDetailHTTPResult, AutocompleteOptions } from './types';
export default class GooglePlace {
    apiKey: string;
    constructor(apiKey: string);
    autocomplete(searchWord: string, options?: AutocompleteOptions): Promise<AutocompleteHTTPResult>;
    placeDetails(placeId: string): Promise<PlaceDetailHTTPResult>;
}
