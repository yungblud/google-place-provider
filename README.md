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

# how to test

1. create `.env` file on same level of folder of `src/`
2. like `.env.copy`, add `GOOGLE_API_KEY` value on `.env`
3. follow bottoms

```bash
$ yarn test
```
