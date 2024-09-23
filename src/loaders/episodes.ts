import type { LoaderContext } from "astro/loaders";
import { reference, z } from "astro:content";

const episodesLoader = {
  name: 'episodes-loader',
  load: async (context: LoaderContext) => {
    const episodes = await fetch(`https://jsonplaceholder.typicode.com/comments`).then(r => r.json());

    for (const item of episodes) {
      const episodeId = `e${item.id}`;
      const seasonId = `s${item.postId}`;
      const id = `${seasonId}:${episodeId}`;
      const parsed = await context.parseData({
        id,
        data: {
          ...item,
          title: item.name,
          description: item.body,
          season: seasonId,
          episode: episodeId,
        },
      });
      context.store.set({
        id,
        data: parsed,
      });
    }
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    season: reference('seasons'),
    episode: z.string(),
  }),
}

export default episodesLoader;