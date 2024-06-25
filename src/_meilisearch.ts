import { MeiliSearch } from 'meilisearch'

const meiliSearchClient = new MeiliSearch({
    host: process.env.NEXT_PUBLIC_MS_HOST!,
    apiKey: process.env.NEXT_PUBLIC_MS_KEY,
});

export const posts = meiliSearchClient.index('post');