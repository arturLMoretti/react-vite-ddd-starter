import { AppCache } from '@/modules/infra/protocol/cache/cacheProtocol';

export class LocalStorageAdapter implements AppCache {
  set(key: string, value: object | string | number): void {
    switch (typeof value) {
      case 'string':
        localStorage.setItem(key, value);
        break;
      case 'number':
        localStorage.setItem(key, value.toString());
        break;
      case 'object':
        localStorage.setItem(key, JSON.stringify(value));
        break;
      default:
        return;
    }
  }

  get(key: string): unknown {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch (error) {
      return ''
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch  (error) {
      console.error('Error on remove item from localStorage', error);
    }
  }
}
