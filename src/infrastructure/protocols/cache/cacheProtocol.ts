export interface GetCache {
  get: (key: string) => unknown;
}

export interface SetCache {
  set: (key: string, value: object | string | number) => void;
}

export interface RemoveCache {
  remove: (key: string) => void;
}

export interface AppCache extends GetCache, SetCache, RemoveCache {}