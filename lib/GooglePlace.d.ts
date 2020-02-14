import { AutocompleteHTTPResult, PlaceDetailHTTPResult } from 'types';
export default class GooglePlace {
    apiKey: string;
    constructor(apiKey: string);
    autocomplete(searchWord: string): Promise<AutocompleteHTTPResult>;
    placeDetails(placeId: string): Promise<PlaceDetailHTTPResult>;
}
