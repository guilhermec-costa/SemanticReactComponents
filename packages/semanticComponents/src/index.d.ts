// types/index.d.ts

declare module 'semantic-react-ui-components' {
  // Componentes
  export const If: React.FC<any>;
  export const For: React.FC<any>;
  export const Show: React.FC<any>;
  export const Switch: React.FC<any>;
  export const Case: React.FC<any>;
  export const With: React.FC<any>;
  export const Delayed: React.FC<any>;
  export const Desktop: React.FC<any>;
  export const Memoized: React.FC<any>;

  // Hooks
  export const useMounted: () => void;
  export const useToggle: () => [boolean, () => void];
  export const useInterval: (callback: () => void, delay: number | null) => void;
  export const usePrevious: <T>(value: T) => T | undefined;
  export const useDebounce: (value: any, delay: number) => any;
  export const useIsIntersectingScreen: () => boolean;
  export const useClickOutside: (ref: React.RefObject<HTMLElement>, callback: () => void) => void;
  export const useDevice: () => 'desktop' | 'tablet' | 'mobile';
  export const useAsyncEffect: (effect: () => Promise<void>, dependencies: any[]) => void;
  export const useElementSize: (ref: React.RefObject<HTMLElement>) => { width: number; height: number };
  export const useKeyCombo: (combo: string, callback: () => void) => void;
  export const useIdleDetection: (timeout: number, onIdle: () => void) => void;
  export const useLocalStorage: <T>(key: string, initialValue: T) => [T, (value: T) => void];
  export const useSessionStorage: <T>(key: string, initialValue: T) => [T, (value: T) => void];
  export const useFetch: (url: string) => { data: any; error: any; loading: boolean };
}
