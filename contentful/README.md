# contentful-graphql

Package that integrates with [Contentful's GraphQL API](https://www.contentful.com/developers/docs/references/graphql/#/introduction).

## Getting Started

1. Copy contents of `.env.example` into a new `.env` file. Save.
2. The value of `CONTENTFUL_ACCESS_TOKEN` is an API key to the Contentful environment set in `CONTENTFUL_ENVIRONMENT`. [See this Contentful article on how to find an API key](https://training.contentful.com/student/page/1050378-api-keys).

## Generating Types

In the project directory, you can run:

- `yarn generate:types`

This will auto generate TypeScript types based on the schema within Contentful's `stage` environment<br>
Output is written to `src/types.ts`.<br>

## ISI

ISI (important safety information) data is managed into Contentful. Depending on your ISI presentation in the UI, you will need data from one or more of these content types: Brand, ISI, and ISI Template. [Here is a Miro link mapping Contentful content types](https://miro.com/app/board/o9J_lMBszt8=/?moveToWidget=3458764530530900087&cot=14) to UI presentation for a few ISI examples.

Note: a field called `codeId` was a later addition to the schema. This is the preferred way to fetch any data collection by a unique value from Contentful. `codeId` is a consistent value in all environments.

Below are the hooks associated to ISI:

- `useContentfulBuilder`: fetches all ISI related data
- `useContentfulISI`: fetches ISI related data in all Brand entries
- `useContentfulISIByBrand`: fetches ISI related data in Brand entries filtered by a list of brands
- `useContentfulISITemplates`: transforms data returned in `useContentfulBuilder` filtered by a list of brand codeIds

## Updating Queries

The queries in this repo are shared between web and mobile applications, please be mindful when changing queries based on migrations that have not made it into Contentful prod (changes should be backwards compatible)
