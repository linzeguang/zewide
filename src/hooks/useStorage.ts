import { useStorageState } from 'react-use-storage-state';

export function useLocalStorage<T = null>(key: string, initialState: T) {
  return useStorageState(key, initialState, localStorage);
}

export function useSessionStorage<T = null>(key: string, initialState: T) {
  return useStorageState(key, initialState, sessionStorage);
}
