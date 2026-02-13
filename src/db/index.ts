import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDb(d1: any) {
  return drizzle(d1, { schema });
}

export type DbClient = ReturnType<typeof getDb>;
