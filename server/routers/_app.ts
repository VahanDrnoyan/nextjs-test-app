import { z } from 'zod';
import { procedure, router } from '../trpc';
import fs from 'fs/promises'

import path from 'path';
const fileName = path.join(process.cwd(), 'public', 'output.json');

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
        try {
            await fs.writeFile(fileName, JSON.stringify(input, null, 2));
            return { success: 'Success' };
          } catch (err) {
            console.error('Error writing to file:', err);
            throw err;
          }
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;