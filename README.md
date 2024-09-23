# Astro Content Layer Typing Bug Demo

Repro of [this bug](https://github.com/withastro/astro/issues/12051).

Uses https://jsonplaceholder.typicode.com/ as the API that is called in the Content Layer loaders.

Usage:

1. `npm install --legacy-peer-deps` (flag is needed because of the beta versions for Astro and the adapter)
2. `npm run check`; it should pass
3. `npm run build`; it should build
4. Remove ` as { id: string }` cast in `src\pages\[season]\[episode].astro`.
5. `npm run check`; it should fail
