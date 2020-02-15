# google-place-provider

This package provides google place API (with very simplified options)

We provide

1. autocomplete
2. place details

see original documents of google place

1. [google place autocomplete](https://developers.google.com/places/web-service/autocomplete?hl=ko)
2. [google place place details](https://developers.google.com/places/web-service/details?hl=ko)

# how to use

```bash
$ yarn add google-place-provider
```

1. autocomplete

```js
import GooglePlaceProvider from 'google-place-provider';

async function main() {
    try {
        const googlePlace = new GooglePlaceProvider('YOUR_API_KEY');

        const result = await googlePlace.autocomplete('hello');
        console.log(result);
    } catch (e) {
        throw e;
    }
}

main();
```

2. placeDetails

```js
import GooglePlaceProvider from 'google-place-provider';

async function main() {
    try {
        const googlePlace = new GooglePlaceProvider('YOUR_API_KEY');

        const result = await googlePlace.placeDetails(
            'ChIJN1t_tDeuEmsRUsoyG83frY4'
        );
        console.log(result);
    } catch (e) {
        throw e;
    }
}
main();
```

# types

```js
import { AutocompleteHTTPResult, PlaceDetailHTTPResult, Prediction, ... } from 'google-place-provider';
```

## type list

```js
export interface AutocompleteHTTPResult {
    predictions: Prediction[];
    status: Status;
}

export interface PlaceDetailHTTPResult {
    html_attributions: string[];
    result: PlaceDetailResult;
    status: Status;
}

export interface Prediction {
    description: string;
    id: string;
    matched_substrings: MatchedSubstring[];
    place_id: string;
    reference: string;
    structured_formatting: {
        main_text: string;
        main_text_matched_substrings: MatchedSubstring[];
        secondary_text: string;
    };
    terms: OffsetValue[];
    types: string[];
}

export interface MatchedSubstring {
    length: number;
    offset: number;
}

export interface OffsetValue {
    offset: number;
    value: string;
}

export interface PlaceDetailResult {
    address_components: LongNameShortName[];
    adr_address: string;
    formatted_address: string;
    formatted_phone_number: string;
    geometry: Geometry;
    icon: string;
    id: string;
    international_phone_number: string;
    name: string;
    place_id: string;
    rating: number;
    reference: string;
    reviews: Review[];
    types: string[];
    url: string;
    utc_offset: number;
    vicinity: string;
    website: string;
}

export interface LongNameShortName {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface Geometry {
    location: Location;
    viewport: {
        northeast: Location;
        southwest: Location;
    };
}

export interface Location {
    lat: number;
    lng: number;
}

export interface Review {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

enum Status {
    OK = 'OK',
    ZERO_RESULTS = 'ZERO_RESULTS',
    OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
    REQUEST_DENIED = 'REQUEST_DENIED',
    INVALID_REQUEST = 'INVALID_REQUEST',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

```

# how to test

1. create `.env` file on same level of folder of `src/`
2. like `.env.copy`, add `GOOGLE_API_KEY` value on `.env`
3. follow bottoms

```bash
$ yarn test
```
