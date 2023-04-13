import { z } from 'zod';
import { procedure, router } from '../trpc';


export const appRouter = router({
    saveData: procedure
    .input(
      z.object({
        id: z.number(),
        new_url:z.string(),
        edited_text: z.string(),
      }).array(),
    )
    .mutation(async ({ input }: any) => {
      return {data:input};

    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;