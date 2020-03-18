export interface AutocompleteHTTPResult {
    predictions: Prediction[];
    status: Status;
}

export interface PlaceDetailHTTPResult {
    html_attributions: string[];
    result: PlaceDetailResult;
    status: Status;
}

export interface FindPlaceSearchHTTPResult {
    candidates: Candidate[];
    debug_log: {
        line: any[];
    };
    status: Status;
}

export interface NearbySearchHTTPResult {
    html_attributions: string[];
    results: {
        geometry: Geometry;
        icon: string;
        id: string;
        name: string;
        opening_hours: OpeningHours;
        photos: Photo[];
        place_id: string;
        plus_code: PlusCode;
        rating: number;
        reference: string;
        scope: string;
        types: string[];
        user_ratings_total: number;
        vicinity: string;
    }[];
    status: Status;
}

export interface TextSearchHTTPResult {
    html_attributions: string[];
    results: {
        formatted_address: string;
        geometry: Geometry;
        icon: string;
        id: string;
        name: string;
        opening_hours: OpeningHours;
        photos: Photo[];
        place_id: string;
        plus_code: PlusCode;
        rating: number;
        reference: string;
        scope: string;
        types: string[];
        user_ratings_total: number;
        vicinity: string;
    }[];
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

export interface Candidate {
    formatted_address: string;
    geometry: Geometry;
    name: string;
    opening_hours: OpeningHours;
    photos: Photo[];
    rating: number;
}

export interface OpeningHours {
    open_now: boolean;
    weekday_text?: string[];
}

export interface Photo {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
}

export interface PlusCode {
    compound_code: string;
    global_code: string;
}

enum Status {
    OK = 'OK',
    ZERO_RESULTS = 'ZERO_RESULTS',
    OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
    REQUEST_DENIED = 'REQUEST_DENIED',
    INVALID_REQUEST = 'INVALID_REQUEST',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export enum AutocompleteTypes {
    ESTABLISHMENT = 'establishment',
    GEO_CODE = 'geocode',
    CITIES = '(cities)',
    REGIONS = '(regions)',
}

export interface AutocompleteOptions {
    language?: string;
    input: string;
    sessiontoken?: string;
    offset?: number;
    location?: string;
    radius?: number;
    types?: AutocompleteTypes;
    components?: string;
}

export interface PlaceDetailOptions {
    place_id: string;
    language?: string;
    region?: string;
    sessiontoken?: string;
    fields?: string;
}

export enum PlaceSearchInputTypes {
    TEXT_QUERY = 'textquery',
    PHONE_NUMBER = 'phonenumber',
}

export interface FindPlaceSearchOptions {
    input: string;
    inputtype: PlaceSearchInputTypes;
    language?: string;
    fields?: string;
    locationbias?: string;
}

export enum PriceLevel {
    MOST_EXPENSIVE = 4,
    EXPENSIVE = 3,
    AFFORDABLE = 2,
    MOST_AFFORDABLE = 1,
}

export enum RankByTypes {
    PROMINENCE = 'prominence',
    DISTANCE = 'distance',
}

export interface NearbySearchOptions {
    location: string;
    radius: number;
    keyword?: string;
    language?: string;
    minprice?: PriceLevel;
    maxprice?: PriceLevel;
    name?: string;
    opennow?: boolean;
    rankby?: RankByTypes;
    type?: string;
    pagetoken?: string;
}

export interface TextSearchOptions {
    query: string;
    language?: string;
    region?: string;
    location?: string;
    radius?: number;
    minprice?: PriceLevel;
    maxprice?: PriceLevel;
    opennow?: boolean;
    pagetoken?: string;
    type?: string;
}

export interface PhotoOptions {
    photoreference: string;
    maxheight?: number;
    maxwidth?: number;
}
