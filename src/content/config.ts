import { z, defineCollection } from "astro:content";
import episodesLoader from "src/loaders/episodes.ts";

const seasons = defineCollection({
  type: 'content_layer',
  loader: async () => {
    return (
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(r => r.json())
    ).map((s: any) => ({ ...s, id: "s" + s.id }));
  },
  schema: z.object({
    title: z.string(),
  }),
})

const episodes = defineCollection({
  type: 'content_layer',
  loader: episodesLoader,
});

export const collections = {
  episodes,
  seasons,
};