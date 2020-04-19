import {
    AutocompleteOptions,
    PlaceDetailOptions,
    NearbySearchOptions,
    TextSearchOptions,
    PhotoOptions,
} from 'types';

export const objectToQuery = (
    queryObject:
        | AutocompleteOptions
        | PlaceDetailOptions
        | NearbySearchOptions
        | TextSearchOptions
        | PhotoOptions
): string => {
    let queryString = '';
    const keys = Object.keys(queryObject);
    if (keys.length === 0) return queryString;

    keys.forEach((key: string) => {
        queryString += `&${key}=${(queryObject as any)[key]}`;
    });

    if (!(queryObject as any).language) {
        queryString += `&language=en`;
    }

    console.log('queryString', queryString);

    return queryString;
};
