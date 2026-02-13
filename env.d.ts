declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_PASSWORD: string;
    }
  }
}

declare module "@cloudflare/next-on-pages" {
  export function getRequestContext(): {
    env: {
      DB: D1Database;
      R2_BUCKET: R2Bucket;
      ADMIN_PASSWORD: string;
      [key: string]: unknown;
    };
    ctx: ExecutionContext;
  };
}

export {};
