import { LocalStorageAdapter } from "@/infrastructure/cache/localStorageAdapter";
import { AppCache } from "@/infrastructure/protocols/cache/cacheProtocol";

export const makeLocalStorageAdapter = (): AppCache => new LocalStorageAdapter();