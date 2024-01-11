import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { testQueryKeys } from "./use-test";

export const queryKeyStore = mergeQueryKeys(testQueryKeys);
